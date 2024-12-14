import Image from "next/image";
import SectionDescription from "../components/section-description";

export default function Discover() {
  return (
    <section className="container py-10 px-0 flex flex-col gap-[72px] overflow-hidden">
      <SectionDescription
        title="Discover Collections"
        caption="Discover unique pieces of African heritage preserved as digital collectibles"
        titleClass="text-center md:text-left md:text-[56px]"
        captionClass="md:text-lg max-w-[776px]"
      />

      <div className="flex items-center gap-6 whitespace-nowrap">
        <div className="flex items-center gap-6 animate-slideToLeft">
          {top_card_details.map((item: CardProp, index: number) => (
            <NFTCards
              key={index}
              image={item.image}
              title={item.title}
              caption={item.caption}
              category={item.category}
            />
          ))}
        </div>
        <div className="flex items-center gap-6 animate-slideToLeft">
          {top_card_details.map((item: CardProp, index: number) => (
            <NFTCards
              key={index}
              image={item.image}
              title={item.title}
              caption={item.caption}
              category={item.category}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-6 whitespace-nowrap justify-end">
        <div className="flex items-center gap-6 animate-slideToRight">
          {bottom_card_details.map((item: CardProp, index: number) => (
            <NFTCards
              key={index}
              image={item.image}
              title={item.title}
              caption={item.caption}
              category={item.category}
            />
          ))}
        </div>

        <div className="flex items-center gap-6 animate-slideToRight">
          {bottom_card_details.map((item: CardProp, index: number) => (
            <NFTCards
              key={index}
              image={item.image}
              title={item.title}
              caption={item.caption}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function NFTCards({
  image,
  title,
  caption,
  category,
}: {
  image: string;
  title: string;
  caption: string;
  category: string;
}) {
  return (
    <div className="inline-flex flex-col pb-2 relative shadow-inset-sm rounded-2xl">
      <div className="flex items-center justify-center w-[240px] md:w-[336px] md:h-[219px] rounded-[8px] bg-[#E8E8E8]">
        <Image
          src={`${image === "" ? "/assets/landing-page/Vector.png" : image}`}
          alt={title}
          width={image ? 336 : 16}
          height={image ? 219 : 14}
          className={
            image === ""
              ? "w-4 h-[14px]"
              : "w-full h-[227px] md:h-full md:max-h-full max-w-full rounded-[8px]"
          }
        />
      </div>

      <p className="absolute top-2 right-2 md:top-5 md:right-5 py-1 px-1.5 bg-white rounded-[4px] text-caption text-[9px]">
        {category}
      </p>

      <div className="flex flex-col py-3 px-4 gap-1">
        <p className="text-xs md:text-base font-semibold">{title}</p>
        <p className="text-caption text-[10px] md:text-xs">{caption}</p>
      </div>
    </div>
  );
}

const top_card_details = [
  {
    image: "/assets/landing-page/nfts/ubuntu.png",
    title: "Ubuntu: I Am Because We Are",
    caption: "By Cultural Archives DAO",
    category: "Customary Laws & Norms",
  },
  {
    image: "/assets/landing-page/nfts/voices.jpg",
    title: "Voices of the Delta",
    caption: "By Cultural Archives DAO",
    category: "Trending",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "A Timeless Tale of Orunmila",
    caption: "By Cultural Archives DAO",
    category: "Trending",
  },
  {
    image: "/assets/landing-page/nfts/tongue.jpg",
    title: "Lost Tongues of Africa",
    caption: "By BBC",
    category: "Languages",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "Untold Stories of Nigerias Unity",
    caption: "By Fela Kuti",
    category: "Historical Narratives",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "Rise and Fall of Oyo Empire",
    caption: "By Sahara Africa",
    category: "Historical Narratives",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "Great Zimbabwe: Shona Legacy",
    caption: "By Cultural Archives DAO",
    category: "Historical Narratives",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "Zulu Wedding Harmonies",
    caption: "By Cultural Archives DAO",
    category: "Songs & Chants",
  },
];

const bottom_card_details = [
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "I am a Mirror but I Do Not Reflect",
    caption: "By Cultural Archives DAO",
    category: "Proverbs & Riddles",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "The Adire Makers of Abeokuta",
    caption: "By Cultural Archives DAO",
    category: "Traditional Knowledge",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "Bone Fixers of Ugua",
    caption: "By Cultural Archives DAO",
    category: "Traditional Knowledge",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "The Tortoise and the King",
    caption: "By Decima Web3",
    category: "Folklore & Myths",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "Legends of The Bush Babies",
    caption: "By Cultural Archives DAO",
    category: "Folklores & Myths",
  },
  {
    image: "/assets/landing-page/nfts/timeless.png",
    title: "Wisdom of the Hausa Healers",
    caption: "By Hauwa Dairies",
    category: "Traditional Knowledge",
  },
];

interface CardProp {
  image: string;
  title: string;
  caption: string;
  category: string;
}
