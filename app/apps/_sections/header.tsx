"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Seperator from "../../../components/custom/seperator";

export default function HeaderSection() {
  return (
    <header className="w-full h-fit flex items-center justify-center">
      <nav className="container flex items-center justify-between py-6 px-12">
        <NavLeft />

        <NavRight />
      </nav>
    </header>
  );
}

function NavLeft() {
  const path = usePathname();

  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-2">
        {/* <Image src={``} alt="Logo" width={28} height={40} /> */}
        <p className="text-foreground text-lg font-bold">Chronicles</p>
      </div>

      <Seperator />

      <div className="flex items-center">
        {navLinks.map((item) => {
          const isActive = path === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 flex flex-col gap-1.5 items-center text-sm font-semibold transition-colors duration-300 ${
                isActive ? "text-primary-foreground" : "text-placeholder"
              }`}
            >
              {item.name}

              <div
                className={`w-3 h-0.5 rounded-[4px] transition-colors duration-300 ${
                  isActive ? "bg-accent" : "bg-transparent"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function NavRight() {
  return (
    <div className="flex items-center gap-8 bg-secondary">
      <div className="flex items-center rounded-[20px] bg-background p-2 pl-4 min-w-[387px] h-10">
        <Input
          placeholder="Search collections"
          className="text-xs p-0 h-fit border-none shadow-none focus-visible:ring-0 "
        />

        <IconContainer>
          <Image
            src={`/assets/apps/MagnifyingGlass.png`}
            alt="Magnifying Glass"
            width={16}
            height={16}
          />
        </IconContainer>
      </div>

      <Button className="p-1 bg-transparent shadow-none hover:bg-transparent">
        <Image
          src={`/assets/apps/BellSimple.png`}
          alt="Bell"
          width={20}
          height={20}
        />
      </Button>

      <div className="flex items-center gap-1 p-2 rounded-[20px] bg-background">
        <IconContainer>
          <Image
            src={`/assets/apps/User.png`}
            alt="User"
            width={13}
            height={13}
          />
        </IconContainer>

        <ChevronDown size={16} color="#757575" />
      </div>
    </div>
  );
}

function IconContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex py-1 px-2 bg-secondary rounded-xl">{children}</div>
  );
}

const navLinks: NavLink[] = [
  { name: "Discover", href: "/apps/discover" },
  { name: "Mint", href: "/apps/mint" },
  { name: "Earn", href: "/apps/earn" },
];

interface NavLink {
  name: "Discover" | "Mint" | "Earn";
  href: string;
}
