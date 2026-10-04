import { NextResponse } from "next/server";

const MAX_LENGTH = { name: 100, email: 254, phone: 30, message: 3000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
// Per-instance memory, so on serverless this is best-effort throttling only.
const hits = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const toText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export const POST = async (request: Request) => {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ message: "Invalid request." }, { status: 400 });
    }

    // Honeypot field: real visitors never see it, so pretend success to bots.
    if (toText(body.website)) {
      return NextResponse.json({ message: "Message sent!" }, { status: 200 });
    }

    const name = toText(body.name);
    const email = toText(body.email);
    const phone = toText(body.phone);
    const message = toText(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (
      !EMAIL_PATTERN.test(email) ||
      name.length > MAX_LENGTH.name ||
      email.length > MAX_LENGTH.email ||
      phone.length > MAX_LENGTH.phone ||
      message.length > MAX_LENGTH.message
    ) {
      return NextResponse.json({ message: "Invalid input." }, { status: 400 });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many messages. Please try again later." },
        { status: 429 },
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram Error: missing bot token or chat id");
      return NextResponse.json(
        { message: "Failed to send message." },
        { status: 500 },
      );
    }

    const text = [
      `📬 <b>New message from portfolio</b>`,
      ``,
      `👤 <b>Name:</b> ${escapeHtml(name)}`,
      `📧 <b>Email:</b> ${escapeHtml(email)}`,
      phone ? `📞 <b>Phone:</b> ${escapeHtml(phone)}` : null,
      ``,
      `💬 <b>Message:</b>`,
      escapeHtml(message),
    ]
      .filter((line) => line !== null)
      .join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
      },
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.description ?? "Telegram API error");
    }

    return NextResponse.json({ message: "Message sent!" }, { status: 200 });
  } catch (error) {
    console.error("Telegram Error:", error);
    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 },
    );
  }
};
