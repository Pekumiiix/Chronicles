"use client";

import Footer from "./sections/footer";
import Header from "./sections/header";
import { AuthProvider } from "../contexts/auth";
import { AuthModal } from "../(auth)";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <AuthModal />
      <div className="flex flex-col items-center gap-10 md:gap-[105px]">
        <Header />

        <main className="w-full flex flex-col items-center gap-10 md:gap-[105px]">
          {children}
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}
