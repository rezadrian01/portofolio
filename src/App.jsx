import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import MainNavigation from "./components/MainNavigation";
import About from "./components/About";
import Skills from "./components/Skills";
import MenuButton from "./components/UI/MenuButton";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [{ index: true, element: <HomePage /> }],
//   },
// ]);

export default function App() {
  // return <RouterProvider router={router} />;
  return (
    <div className="bg-zinc-900">
      <MainNavigation />
      {/* <MenuButton isShow={true} /> */}
      <main className="min-h-screen flex flex-col pb-96 px-4">
        <HomePage />
        <About />
        <Skills />
      </main>
    </div>
  );
}
