"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/contexts/auth";

export default function Header() {
  const { openAuthModal } = useAuth();
  return (
    <header className="w-full h-fit flex justify-center max-w-[1536px] bg-hero-bg bg-center bg-cover">
      <nav className="container py-8 px-5 lg:px-32 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          {/* <Image src={``} alt="Logo" width={28} height={40} /> */}
          <p className="text-foreground font-semibold">Chronicles</p>
        </div>

        <Button variant="blue" onClick={() => openAuthModal("signin")}>
          SIGN IN
        </Button>
      </nav>
    </header>
  );
}
