export interface CertificateItem {
  name: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
}

export const CERTIFICATES: CertificateItem[] = [];
