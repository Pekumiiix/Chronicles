import { ReactElement } from "react";
import AnimatedBorderWrapper from "../components/animated-border-wrapper";
import { LogInIcon } from "lucide-react";
import { UploadIcon } from "lucide-react";
import { BadgeCheck } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-16 px-32 flex flex-col gap-[72px] items-center">
      <p className="text-foregrpund text-[56px] leading-[62px] font-extrabold">
        How It Works
      </p>

      <div className="flex flex-col items-center py-[9px] max-w-[1110px]">
        {steps.map((item: StepsProp, index: number) => (
          <Steps
            key={index}
            icon={item.icon}
            number={index + 1}
            title={item.title}
            caption={item.caption}
          />
        ))}
      </div>
    </section>
  );
}

function Steps({ icon, number, title, caption }: StepComponentProp) {
  return (
    <div
      className={`flex ${
        number % 2 ? "flex-row" : "flex-row-reverse"
      } max-w-[1110px]`}
    >
      <div
        className={`flex ${
          number % 2 ? "justify-end" : "justify-start"
        } px-16 pb-16 w-[555px]`}
      >
        <AnimatedBorderWrapper>
          <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stroke rounded-xl flex items-center justify-center">
            {icon}
          </div>
        </AnimatedBorderWrapper>
      </div>

      <div
        className={`flex flex-col w-[555px] px-16 pb-16 ${
          number % 2
            ? "gradient-border-left items-start -ml-1"
            : "gradient-border-right items-end"
        } ${number === 3 && "gradient-border-left-2"} gap-4`}
      >
        <p className="bg-stroke w-12 h-12 rounded-full text-[#080808] text-2xl font-semibold flex items-center justify-center">
          {number}
        </p>

        <div
          className={`flex flex-col gap-2 ${
            number % 2 ? "items-start" : "items-end"
          }`}
        >
          <p className="text-[#080808] text-2xl font-semibold">{title}</p>
          <p
            className={`text-caption text-lg ${
              number % 2 ? "text-left" : "text-right"
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
    icon: <LogInIcon size={`32px`} color="#080808" />,
    title: "Sign Up",
    caption:
      "Create your account and setup your wallet to become part of a global network dedicated to preserving heritage.",
  },
  {
    icon: <UploadIcon size={`32px`} color="#080808" />,
    title: "Upload & Tokenize",
    caption:
      "Record and upload stories as video or audio, which are securely minted as NFTs for preservation.",
  },
  {
    icon: <BadgeCheck size={`32px`} color="#080808" />,
    title: "Validate & Earn",
    caption:
      "Contribute to authenticating content to earn rewards, or sell your tokenized collections to interested buyers.",
  },
];

interface StepsProp {
  icon: ReactElement;
  title: string;
  caption: string;
}

interface StepComponentProp {
  icon: ReactElement;
  number: number;
  title: string;
  caption: string;
}