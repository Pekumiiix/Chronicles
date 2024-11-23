import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container py-8 px-32 flex flex-col gap-14">
      <div className="flex flex-col items-end gap-8">
        <div className="w-full flex flex-col text-7xl font-black leading-[80px]">
          <p className="text-left">Your Stories Today,</p>
          <p className="text-right">Legacy For Generation</p>
        </div>

        <p className="text-lg text-caption max-w-[493px]">
          Transform your cultural memories into digital treasures that future
          generations will cherish through innovative digital ownership
        </p>
      </div>

      <div className="w-full flex items-center justify-between">
        <Image
          src={`/assets/landing-page/Line-2.png`}
          alt="Border"
          width={50}
          height={20}
        />

        <div className="flex items-center gap-[11px]">
          <Button variant={`black`}>Begin Your Legacy Journey</Button>

          <Button
            variant={`ghost`}
            className="py-3 px-6 text-caption font-semibold flex items-center gap-2 h-10"
          >
            Explore Stories
            <ArrowUpRight color="#757575" size={20} />
          </Button>
        </div>

        <Image
          src={`/assets/landing-page/Line-2.png`}
          alt="Border"
          width={50}
          height={20}
        />
      </div>
    </section>
  );
}
