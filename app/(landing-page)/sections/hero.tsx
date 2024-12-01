import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CardStack from "../components/card-stack";

export default function Hero() {
  return (
    <section className="relative container pt-0 pb-8 px-5 lg:px-32 flex flex-col-reverse items-center lg:items-stretch lg:flex-col lg:justify-end gap-14 h-fit">
      <CardStack />

      <div className="flex flex-col lg:gap-14 items-center">
        <div className="flex flex-col items-center lg:items-end gap-6 lg:gap-8 lg:mt-20 mb-14">
          <p className="flex lg:hidden text-left md:text-center text-[40px] leading-[44px] md:text-5xl font-black">
            Your Stories Today, Legacy For Generation
          </p>
          <div className="w-full hidden lg:flex flex-col text-7xl font-black leading-[80px]">
            <p className="text-left">Your Stories Today,</p>
            <p className="text-right">Legacy For Generation</p>
          </div>

          <p className="text-sm md:text-lg text-caption text-center lg:text-left max-w-[493px]">
            Transform your cultural memories into digital treasures that future
            generations will cherish through innovative digital ownership
          </p>
        </div>

        <div className="w-full flex items-end md:items-center justify-between">
          <Image
            src={`/assets/landing-page/Line-2.png`}
            alt="Border"
            width={50}
            height={20}
            className="mb-3 md:mb-0"
          />

          <div className="flex flex-col-reverse md:flex-row items-center gap-[11px]">
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
            className="mb-3 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
}
