interface CollectionProps {
  image: string;
  author: string;
  title: string;
  preview: string;
  categories: string[];
  verified: boolean;
  stories_count: number;
  authors_count: number;
  floor_price: number;
}

export const nfts_collection_details: CollectionProps[] = [
  {
    image: "/assets/apps/card/Featured.png",
    author: "By Cultural Archives DAO",
    title: "Ancestral Wisdom Series",
    preview:
      "Rare collection of elder teachings and traditional knowledge passed down through generations stories",
    categories: ["Historical Narratives", "Folklores & Myths"],
    verified: true,
    stories_count: 24,
    authors_count: 11,
    floor_price: 18000,
  },
];
