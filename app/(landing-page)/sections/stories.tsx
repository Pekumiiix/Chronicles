import SectionDescription from "../components/section-description";
import { ReactElement } from "react";
import DatabaseIcon from "@/components/icons/database";
import AccessibilityIcon from "@/components/icons/accessibility";
import GroupUserIcon from "@/components/icons/group-user";
import Books from "@/components/icons/books";
import SquareUserIcon from "@/components/icons/square-user";
import BorderBottomGradient from "../components/border-bottom-gradient";
import CircleDollarSign from "@/components/icons/circle-dollar-sign";

export default function StoriesSection() {
  return (
    <section className="container flex flex-col gap-[72px] py-10 px-5 lg:px-32">
      <SectionDescription
        title="Why Your Stories Matter"
        caption="Preserve, share, and celebrate the cultural treasures that define who you are, ensuring they inspire future generations for years to come."
        titleClass="md:text-[56px] text-center text-left"
        captionClass="md:text-lg max-w-[776px]"
      />

      <div className="w-full grid md:grid-cols-2 gap-y-5 gap-x-5 h-fit">
        <StoryCard
          className="md:story-border-gradient-left-1 md:story-border-gradient-bottom-left"
          icon={card_contents[0].icon}
          title={card_contents[0].title}
          caption={card_contents[0].caption}
          dot
        />

        <BorderBottomGradient />

        <StoryCard
          className="md:story-border-gradient-bottom-right"
          icon={card_contents[1].icon}
          title={card_contents[1].title}
          caption={card_contents[1].caption}
        />

        <BorderBottomGradient />

        <StoryCard
          className="md:border-r border-[#B7B4B4] md:story-border-gradient-bottom-left"
          icon={card_contents[2].icon}
          title={card_contents[2].title}
          caption={card_contents[2].caption}
          dot
        />

        <BorderBottomGradient />

        <StoryCard
          className="md:story-border-gradient-bottom-right"
          icon={card_contents[3].icon}
          title={card_contents[3].title}
          caption={card_contents[3].caption}
        />

        <BorderBottomGradient />

        <StoryCard
          className="md:story-border-gradient-left-2"
          icon={card_contents[4].icon}
          title={card_contents[4].title}
          caption={card_contents[4].caption}
        />

        <BorderBottomGradient />

        <StoryCard
          icon={card_contents[5].icon}
          title={card_contents[5].title}
          caption={card_contents[5].caption}
        />
      </div>
    </section>
  );
}

function StoryCard({
  className,
  dot,
  icon,
  title,
  caption,
}: {
  className?: string;
  dot?: boolean;
  icon: string | ReactElement;
  title: string;
  caption: string;
}) {
  return (
    <div
      className={`relative min-w-fit flex flex-col items-center pt-12 pb-8 px-0 md:px-10 gap-4 ${className}`}
    >
      <div
        className={`absolute ${
          dot ? "hidden md:flex" : "hidden"
        } items-center justify-center -bottom-6 -right-6 p-4 rounded-full bg-transparent bg-white`}
      >
        <div className="w-3 h-3 bg-dot-gradient z-10 rotate-45" />
      </div>
      <div className="flex items-center justify-center bg-[#E8E8E8] w-12 h-12 rounded-full">
        {icon}
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-lg md:text-2xl font-semibold text-center">{title}</p>
        <p className="text-caption text-sm md:text-lg text-center">{caption}</p>
      </div>
    </div>
  );
}

const card_contents: CardProps[] = [
  {
    icon: <DatabaseIcon className="w-6 h-6" />,
    title: "Preserve Cultural Heritage",
    caption:
      "Your culture deserves to endure. Safeguard Africa’s stories and wisdom with blockchain, keeping them alive for generations.",
  },
  {
    icon: <AccessibilityIcon className="w-6 h-6" />,
    title: "Empower Communities",
    caption:
      "Your stories, your rewards. Earn tokens while preserving cultural treasures and strengthening community bonds.",
  },
  {
    icon: <GroupUserIcon className="w-6 h-6" />,
    title: "Global Accessibility",
    caption:
      "Your voice, heard worldwide. AI transcription and translation make Africa’s heritage accessible in any language, anywhere.",
  },
  {
    icon: <Books className="w-6 h-6" />,
    title: "Support Education & Research",
    caption:
      "Your heritage is knowledge. Provide verified data for schools and researchers, bridging tradition and modern education.",
  },
  {
    icon: <SquareUserIcon className="w-6 h-6" />,
    title: "Drive Economic Opportunities",
    caption:
      "Your legacy, your wealth. Monetize cultural treasures responsibly, creating new opportunities in tourism and beyond.",
  },
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
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
