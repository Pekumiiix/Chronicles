import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionDescription from "../components/section-description";

export default function FaqSection() {
  return (
    <section className="container flex flex-col gap-[72px] py-[10px] px-5 md:px-10 lg:px-[352px]">
      <SectionDescription
        title="FAQs"
        caption="Everything You Need to Know About Preserving Stories and Earning
          Rewards with Chronicles"
        titleClass="md:text-title md:leading-[79px]"
        captionClass="md:text-lg w-full"
      />

      <Accordion type="single" collapsible className="w-full">
        {accordion_items.map((item: AccordionItems, index: number) => (
          <FaqAccordion
            key={index}
            trigger={item.title}
            content={item.details}
            index={index}
          />
        ))}
      </Accordion>
    </section>
  );
}

function FaqAccordion({ trigger, content, index }: AccordionProps) {
  return (
    <AccordionItem value={`index-${index + 1}`} className="border-stroke">
      <AccordionTrigger className="text-foreground font-semibold">
        {trigger}
      </AccordionTrigger>
      <AccordionContent className="text-sm text-[#5E5E66]">
        {content}
      </AccordionContent>
    </AccordionItem>
  );
}

const accordion_items: AccordionItems[] = [
  {
    title: "What is Chronicles?",
    details:
      "Chronicles is a blockchain-powered platform for preserving and sharing cultural stories, oral histories, and traditions as tokenized assets (NFTs).",
  },
  {
    title: "How does it work?",
    details:
      "Users record and upload content, which is securely stored and minted as NFTs. The community validates submissions, ensuring authenticity, and contributors can earn rewards or sell their collections.",
  },
  {
    title: "What is an NFT, and why does Chronicles use it?",
    details:
      "NFTs (Non-Fungible Tokens) are unique digital assets stored on a blockchain. Chronicles uses NFTs to ensure ownership, authenticity, and secure preservation of your stories.",
  },
  {
    title: "Can I sell my stories, and how does it work?",
    details:
      "Yes! Tokenized stories can be listed for sale, giving buyers access while you retain credit as the creator.",
  },
  {
    title: "How does Chronicles support cultural preservation?",
    details:
      "By tokenizing and storing cultural stories on an immutable blockchain, Chronicles ensures that valuable traditions and histories are safeguarded for future generations.",
  },
  {
    title: "What types of content can I upload?",
    details:
      "You can upload audio, video, or written stories that capture cultural heritage, historical events, folklores, or personal experiences.",
  },
];

interface AccordionItems {
  title: string;
  details: string;
}

interface AccordionProps {
  trigger: string;
  content: string;
  index: number;
}
