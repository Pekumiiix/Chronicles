//import Image from "next/image";
import { Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container w-full flex flex-col items-center lg:items-stretch pt-16 lg:px-24 gap-12 mb-5">
      <div className="w-full flex flex-col items-center lg:flex-row lg:items-stretch gap-12 md:gap-[112px]">
        <div className="flex flex-col items-center gap-6 max-w-[90%] lg:items-stretch lg:max-w-[300px]">
          <div className="flex items-center px-1 gap-2 w-fit">
            {/* <Image src={``} alt="Logo" width={28} height={40} /> */}
            <p className="text-foreground font-black text-[17px] md:text-lg">
              Chronicles
            </p>
          </div>

          <p className="text-caption text-center lg:text-left">
            The first global marketplace that transforms cultural memories into
            lasting treasures, ensuring they endure for future generations
            through secure and innovative digital ownership.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-stretch gap-12 lg:flex-row justify-between w-full">
          {footer_links.map((item: FooterProps, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-stretch gap-6 w-[60%] lg:max-w-fit"
            >
              <p className="text-lg font-semibold text-foreground leading-[23px] text-center lg:text-left">
                {item.header}
              </p>

              <div className="flex flex-col items-center lg:items-stretch gap-5 max-w-fit">
                {item.links.map((link: string) => (
                  <Link
                    href={`/${link}`}
                    key={link}
                    className="text-lg text-caption text-center lg:text-left hover:underline hover:text-foreground transition-colors duration-300"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-stroke" />

      <div className="w-full flex flex-col-reverse gap-4 md:gap-0 md:flex-row items-center justify-between">
        <div className="flex gap-2">
          <Copyright className="w-6 h-6" />
          <p className="font-medium text-foreground">
            2024 Chronicles. All rights reserved
          </p>
        </div>

        <div className="flex items-center gap-5">
          <p className="font-medium text-foreground">Privacy Policy</p>
          <div className="w-[1px] h-[18px] bg-[#C1C1C1]" />
          <p className="font-medium text-foreground">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

const footer_links: FooterProps[] = [
  {
    header: "Collections",
    links: [
      "Historical Narratives",
      "Folklores & Myths",
      "Proverbs & Riddles",
      "Traditional Knowledge",
      "Songs & Chants",
      "Customary Laws & Norms",
    ],
  },
  {
    header: "Community",
    links: ["Learn", "Blog", "Support", "Partners"],
  },
  {
    header: "Company",
    links: ["About Us", "Contact Us", "FAQs"],
  },
];

interface FooterProps {
  header: "Collections" | "Community" | "Company";
  links: string[];
}
