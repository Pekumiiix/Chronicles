import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CardStack from "../components/card-stack";
import JetIcon from "@/components/icons/jet-icon";

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1536px] pt-[105px] pb-8 px-5 lg:px-32 flex flex-col-reverse items-center lg:items-stretch lg:flex-col lg:justify-end gap-14 h-fit bg-hero-bg bg-center bg-cover -mt-[105px]">
      <CardStack />

      <Image
        src={`/assets/landing-page/Sparkle.png`}
        alt="Sparkle"
        width={24}
        height={24}
        className="absolute bottom-[250px] right-10 md:top-[30px] md:right-[500px] w-[11px] h-[11px] md:w-6 md:h-6"
      />

      <Image
        src={`/assets/landing-page/Sparkle.png`}
        alt="Sparkle"
        width={24}
        height={24}
        className="absolute left-10 bottom-20 md:top-[175px] md:left-[90%] w-[11px] h-[11px] md:w-6 md:h-6"
      />

      <div className="flex flex-col gap-2.5 items-center">
        <div className="flex w-full justify-center md:justify-start gap-1">
          <JetIcon />
          <p className="text-xs leading-none bg-text-gradient bg-clip-text text-transparent">
            1,500 CREATORS REWARDED
          </p>
        </div>
        <div className="w-full flex flex-col items-center lg:items-start gap-4 lg:gap-8 md:mb-14">
          <p className="flex lg:hidden text-center text-[40px] leading-[44px] md:text-5xl font-black">
            Your Stories Today, Legacy For Generation
          </p>
          <div className="w-full hidden lg:flex flex-col text-7xl font-black leading-[80px] z-10">
            <p>Your Stories Today,</p>
            <div className="flex items-center gap-4 mt-2">
              <Image
                src={`/assets/landing-page/hero-image.png`}
                alt="Illustration"
                width={96}
                height={56}
              />
              <p className="leading-none">Legacy For Generation</p>
            </div>
          </div>

          <p className="text-sm text-center md:text-lg text-caption lg:text-left max-w-[493px]">
            Transform your cultural memories into digital treasures that future
            generations will cherish through innovative digital ownership
          </p>
        </div>

        <div className="w-full flex items-end md:items-center justify-between">
          <Image
            src={`/assets/landing-page/Line-2.png`}
            alt="Border"
            width={12}
            height={20}
            className="mb-3 md:mb-0 lg:hidden"
          />

          <div className="flex flex-col-reverse md:flex-row items-center gap-[11px]">
            <Button
              variant={`blue`}
              className="py-3 px-6 h-10 lg:h-12 font-semibold"
            >
              Begin Your Legacy Journey
            </Button>

            <Button
              variant={`ghost`}
              className="py-3 px-6 text-caption font-semibold flex items-center gap-2 h-12"
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
            className="w-3 md:w-[50px] mb-3 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
}
