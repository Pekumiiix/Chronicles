import { ReactElement } from "react";
import CloudCheckIcon from "@/components/icons/cloud-check";
import SectionDescription from "../../../components/custom/section-description";
import RoundUserIcon from "@/components/icons/round-user";
import BadgeCheckIcon from "@/components/icons/badge-check";
import BorderBottomGradient from "../../../components/custom/border-bottom-gradient";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function HowItWorks() {
  return (
    <section className="container py-16 px-5 lg:px-32 flex flex-col gap-[72px] items-center">
      <SectionDescription
        title="How It Works"
        caption="From Your Voice to the World: Transform, Share, and Preserve Stories for Generations."
        titleClass="md:text-[56px] md:leading-[62px]"
        captionClass="md:text-lg w-full"
      />

      <div className="flex flex-col gap-12 lg:gap-0 items-center py-[9px] max-w-full lg:max-w-[1110px]">
        <Steps
          icon={steps[0].icon}
          src={steps[0].src}
          alt={steps[0].alt}
          number={1}
          title={steps[0].title}
          caption={steps[0].caption}
        />

        <BorderBottomGradient />

        <Steps
          icon={steps[1].icon}
          src={steps[1].src}
          alt={steps[1].alt}
          number={2}
          title={steps[1].title}
          caption={steps[1].caption}
        />

        <BorderBottomGradient />

        <Steps
          icon={steps[2].icon}
          src={steps[2].src}
          alt={steps[2].alt}
          number={3}
          title={steps[2].title}
          caption={steps[2].caption}
        />
      </div>
    </section>
  );
}

function Steps({
  icon,
  src,
  alt,
  number,
  title,
  caption,
}: StepsProp & { number: number }) {
  return (
    <div
      className={cn(
        "flex gap-5 lg:gap-0 items-center lg:items-stretch lg:max-w-[1110px]",
        {
          "flex-col lg:flex-row": number % 2,
          "flex-col lg:flex-row-reverse": !(number % 2),
        }
      )}
    >
      <div
        className={cn("hidden md:flex lg:px-16 lg:pb-16 w-fit lg:w-1/2", {
          "justify-end": number % 2,
          "justify-start lg:mr-1": !(number % 2),
        })}
      >
        {/** For desktop */}
        <div className="relative w-[196px] h-[148px] bg-[#E8E8E8] rounded-xl flex items-center justify-center p-[2px]">
          <div className="w-full h-full z-10 flex items-center justify-center bg-[#FFFDFC] rounded-xl">
            <div className="flex py-2 px-5 rounded-3xl bg-[#FFFDFC]">
              <div className="flex p-2 rounded-full bg-[#E8E8E8]">{icon}</div>
            </div>
          </div>
          <BorderBeam size={250} className="!z-0" />
        </div>
      </div>

      {/** For mobile */}
      <div className="relative flex justify-center items-center md:hidden w-[100px] h-[75px] rounded-full p-[2px]">
        <div className="w-full h-full z-10 flex items-center justify-center bg-[#E8E8E8] rounded-full">
          <div className="flex p-2 rounded-full bg-[#E8E8E8] z-10">
            <Image src={src} alt={alt} width={20} height={20} />
          </div>
        </div>
        <BorderBeam size={100} />
      </div>

      <div
        className={cn(
          "flex flex-col items-center lg:w-1/2 md:px-16 lg:pb-16 gap-4",
          {
            "gradient-border-left lg:items-start lg:-ml-1": number % 2,
            "gradient-border-right lg:items-end": !(number % 2),
            "gradient-border-left-2": number === 3,
          }
        )}
      >
        <p className="hidden lg:flex bg-stroke w-12 h-12 rounded-full text-[#080808] text-2xl font-semibold items-center justify-center">
          {number}
        </p>

        <div
          className={cn("flex flex-col items-center gap-2", {
            "lg:items-start": number % 2,
            "lg:items-end": !(number % 2),
          })}
        >
          <p className="text-[#080808] text-lg md:text-2xl font-semibold">
            {title}
          </p>

          <p
            className={cn("text-caption text-sm md:text-lg text-center", {
              "lg:text-left": number % 2,
              "lg:text-right": !(number % 2),
            })}
          >
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: StepsProp[] = [
  {
    icon: <RoundUserIcon className="w-5 h-5" />,
    src: "/assets/landing-page/circle-user.png",
    alt: "Circle User",
    title: "Sign Up",
    caption:
      "Create your account and setup your wallet to become part of a global network dedicated to preserving heritage.",
  },
  {
    icon: <CloudCheckIcon className="w-5 h-5" />,
    src: "/assets/landing-page/cloud-check.png",
    alt: "Cloud Check",
    title: "Upload & Tokenize",
    caption:
      "Record and upload stories as video or audio, which are securely minted as NFTs for preservation.",
  },
  {
    icon: <BadgeCheckIcon className="w-5 h-5" />,
    src: "/assets/landing-page/circle-badge.png",
    alt: "Circle Badge",
    title: "Validate & Earn",
    caption:
      "Contribute to authenticating content to earn rewards, or sell your tokenized collections to interested buyers.",
  },
];

interface StepsProp {
  icon: ReactElement;
  alt: string;
  src: string;
  title: string;
  caption: string;
}
