import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-fit flex justify-center max-w-[1536px] bg-hero-bg bg-center bg-cover">
      <nav className="container py-8 px-5 lg:px-32 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          {/* <Image src={``} alt="Logo" width={28} height={40} /> */}
          <p className="text-foreground font-semibold">Chronicles</p>
        </div>

        <Button asChild variant={`blue`}>
          <Link href={`/`}>SIGN IN</Link>
        </Button>
      </nav>
    </header>
  );
}
