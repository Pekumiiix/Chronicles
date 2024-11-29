import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CardStack from "../components/card-stack";

export default function Hero() {
  return (
    <section className="relative container pt-0 pb-8 px-32 flex flex-col justify-end gap-14 h-fit">
      <CardStack />

      <div className="flex flex-col items-end gap-8 mt-20 mb-14">
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
          <Button variant={`blue`}>Begin Your Legacy Journey</Button>

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
