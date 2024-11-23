import Image from "next/image";
import SectionDescription from "../components/section-description";

export default function Discover() {
  return (
    <section className="container py-10 px-32 flex flex-col gap-[72px]">
      <SectionDescription
        title="Discover Collections"
        caption="Discover unique pieces of African heritage preserved as digital collectibles"
        titleClass="text-[56px]"
        captionClass="text-lg max-w-[776px]"
      />

      <div className="flex items-center gap-6 overflow-x-hidden">
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
    <div className="flex flex-col pb-2 relative">
      <div className="flex items-center justify-center w-[336px] h-[219px] rounded-[8px] bg-[#E8E8E8]">
        <Image
          src={`${image === "" ? "" : image}`}
          alt=""
          className={
            image === ""
              ? "w-4 h-[14px]"
              : "w-auto h-auto max-h-full max-w-full rounded-[8px]"
          }
        />
      </div>

      <p className="absolute top-5 right-5 py-1 px-1.5 bg-white rounded-[4px] text-caption text-[9px]">
        {category}
      </p>

      <div className="flex flex-col py-3 px-4 gap-1.5">
        <p className="font-semibold">{title}</p>
        <p className="text-caption text-xs">{caption}</p>
      </div>
    </div>
  );
}

const top_card_details = [
  {
    image: "",
    title: "Ubuntu: I Am Because We Are",
    caption: "By Cultural Archives DAO",
    category: "Customary Laws & Norms",
  },
  {
    image: "",
    title: "Voices of the Delta",
    caption: "By Cultural Archives DAO",
    category: "Trending",
  },
  {
    image: "",
    title: "A Timeless Tale of Orunmila",
    caption: "By Cultural Archives DAO",
    category: "Trending",
  },
];

const bottom_card_details = [
  {
    image: "",
    title: "I am a Mirror but I Do Not Reflect",
    caption: "By Cultural Archives DAO",
    category: "Proverbs & Riddles",
  },
  {
    image: "",
    title: "The Adire Makers of Abeokuta",
    caption: "By Cultural Archives DAO",
    category: "Traditional Knowledge",
  },
  {
    image: "",
    title: "Bone Fixers of Ugua",
    caption: "By Cultural Archives DAO",
    category: "Traditional Knowledge",
  },
];

interface CardProp {
  image: string;
  title: string;
  caption: string;
  category: string;
}
