import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";

export default function MainLayout() {
  document.title = "mainlyout";
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink-0">
        <Navbar />
      </header>
      <main className="flex-grow my-8">
        <Outlet />
      </main>
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
}
