import { ReactElement } from "react";
import AnimatedBorderWrapper from "../../../components/custom/animated-border-wrapper";
import CloudCheckIcon from "@/components/icons/cloud-check";
import SectionDescription from "../../../components/custom/section-description";
import RoundUserIcon from "@/components/icons/round-user";
import BadgeCheckIcon from "@/components/icons/badge-check";
import BorderBottomGradient from "../../../components/custom/border-bottom-gradient";
import Image from "next/image";

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
          image={steps[0].image}
          number={1}
          title={steps[0].title}
          caption={steps[0].caption}
        />

        <BorderBottomGradient />

        <Steps
          icon={steps[1].icon}
          image={steps[1].image}
          number={2}
          title={steps[1].title}
          caption={steps[1].caption}
        />

        <BorderBottomGradient />

        <Steps
          icon={steps[2].icon}
          image={steps[2].image}
          number={3}
          title={steps[2].title}
          caption={steps[2].caption}
        />
      </div>
    </section>
  );
}

function Steps({ icon, image, number, title, caption }: StepComponentProp) {
  return (
    <div
      className={`flex gap-5 lg:gap-0 items-center lg:items-stretch ${
        number % 2 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
      } lg:max-w-[1110px]`}
    >
      <div
        className={`hidden md:flex ${
          number % 2 ? "justify-end" : "justify-start"
        } lg:px-16 lg:pb-16 w-fit lg:w-[555px]`}
      >
        <AnimatedBorderWrapper>
          <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] bg-[#E8E8E8] rounded-xl flex items-center justify-center">
            <div className="flex py-2 px-5 rounded-3xl bg-[#FFFDFC]">
              <div className="flex p-2 rounded-full bg-[#E8E8E8]">{icon}</div>
            </div>
          </div>
        </AnimatedBorderWrapper>
      </div>

      <AnimatedBorderWrapper className="flex md:hidden w-[100px] h-[75px] rounded-full">
        <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] bg-[#FFFDFC] rounded-full flex items-center justify-center">
          <div className="flex p-2 rounded-full bg-[#E8E8E8]">{image}</div>
        </div>
      </AnimatedBorderWrapper>

      <div
        className={`flex flex-col items-center lg:w-[555px] md:px-16 lg:pb-16 ${
          number % 2
            ? "gradient-border-left lg:items-start lg:-ml-1"
            : "gradient-border-right lg:items-end"
        } ${number === 3 && "gradient-border-left-2"} gap-4`}
      >
        <p className="hidden lg:flex bg-stroke w-12 h-12 rounded-full text-[#080808] text-2xl font-semibold items-center justify-center">
          {number}
        </p>

        <div
          className={`flex flex-col items-center gap-2 ${
            number % 2 ? "lg:items-start" : "lg:items-end"
          }`}
        >
          <p className="text-[#080808] text-lg md:text-2xl font-semibold">
            {title}
          </p>
          <p
            className={`text-caption text-sm md:text-lg text-center ${
              number % 2 ? "lg:text-left" : "lg:text-right"
            }`}
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
    image: (
      <Image
        src={`/assets/landing-page/circle-user.png`}
        alt="Circle User"
        width={20}
        height={20}
      />
    ),
    title: "Sign Up",
    caption:
      "Create your account and setup your wallet to become part of a global network dedicated to preserving heritage.",
  },
  {
    icon: <CloudCheckIcon className="w-5 h-5" />,
    image: (
      <Image
        src={`/assets/landing-page/cloud-check.png`}
        alt="Cloud Check"
        width={20}
        height={20}
      />
    ),
    title: "Upload & Tokenize",
    caption:
      "Record and upload stories as video or audio, which are securely minted as NFTs for preservation.",
  },
  {
    icon: <BadgeCheckIcon className="w-5 h-5" />,
    image: (
      <Image
        src={`/assets/landing-page/circle-badge.png`}
        alt="Circle Badge"
        width={20}
        height={20}
      />
    ),
    title: "Validate & Earn",
    caption:
      "Contribute to authenticating content to earn rewards, or sell your tokenized collections to interested buyers.",
  },
];

interface StepsProp {
  icon: ReactElement;
  image: ReactElement;
  title: string;
  caption: string;
}

interface StepComponentProp {
  icon: ReactElement;
  image: ReactElement;
  number: number;
  title: string;
  caption: string;
}
