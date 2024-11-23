import StarIcon from "@/components/icons/star";
import AnimatedBorderWrapper from "../components/animated-border-wrapper";
import SectionDescription from "../components/section-description";
import { ReactElement } from "react";
import CloseSquare from "@/components/icons/close-square";
import GlobalSearch from "@/components/icons/global-search";
import Lock from "@/components/icons/lock";

export default function StoriesSection() {
  return (
    <section className="container flex flex-col gap-[72px] py-10 px-32">
      <SectionDescription
        title="Why Your Stories Matter"
        caption="Preserve, share, and celebrate the cultural treasures that define who you are, ensuring they inspire future generations for years to come."
        titleClass="text-[56px]"
        captionClass="text-lg max-w-[776px]"
      />

      <div className="w-full grid grid-cols-2 gap-8 h-fit relative">
        {card_contents.map((item: CardProps, index: number) => (
          <StoryCard
            key={index}
            icon={item.icon}
            title={item.title}
            caption={item.caption}
          />
        ))}
      </div>
    </section>
  );
}

function StoryCard({
  icon,
  title,
  caption,
}: {
  icon: string | ReactElement;
  title: string;
  caption: string;
}) {
  return (
    <AnimatedBorderWrapper className="w-full h-[304px] rounded-[32px]">
      <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] bg-stroke flex flex-col pt-12 pb-8 px-10 gap-8 rounded-[32px]">
        <div className="flex items-center justify-center bg-[#454545] w-12 h-12 rounded-full">
          {icon}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-caption text-lg">{caption}</p>
        </div>
      </div>
    </AnimatedBorderWrapper>
  );
}

const card_contents: CardProps[] = [
  {
    icon: <StarIcon />,
    title: "Preserve Cultural Heritage",
    caption:
      "Your culture deserves to endure. Safeguard Africa’s stories and wisdom with blockchain, keeping them alive for generations.",
  },
  {
    icon: <CloseSquare />,
    title: "Empower Communities",
    caption:
      "Your stories, your rewards. Earn tokens while preserving cultural treasures and strengthening community bonds.",
  },
  {
    icon: <GlobalSearch />,
    title: "Global Accessibility",
    caption:
      "Your voice, heard worldwide. AI transcription and translation make Africa’s heritage accessible in any language, anywhere.",
  },
  {
    icon: <Lock />,
    title: "Support Education & Research",
    caption:
      "Your heritage is knowledge. Provide verified data for schools and researchers, bridging tradition and modern education.",
  },
  {
    icon: <StarIcon />,
    title: "Drive Economic Opportunities",
    caption:
      "Your legacy, your wealth. Monetize cultural treasures responsibly, creating new opportunities in tourism and beyond.",
  },
  {
    icon: <CloseSquare />,
    title: "Foster Identity and Belonging",
    caption:
      "Your roots, your pride. Celebrate and share the stories that define who you are, inspiring connections across generations and cultures.",
  },
];

interface CardProps {
  icon: string | ReactElement;
  title: string;
  caption: string;
}
