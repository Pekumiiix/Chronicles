export interface Collection {
  id: number;
  verified: boolean;
  image_count: number;
  top_five_images: string[];
  title: string;
  author: string;
  stories_count: number;
  authors_count: number;
  floor_price: number;
  total_content_count: number;
  content_count: {
    type: "Videos" | "Audio recordings" | "Text documents";
    count: number;
  }[];
  about: string;
  buyers_count: number;
}

export const collection: Collection[] = [
  {
    id: 1,
    verified: true,
    image_count: 24,
    top_five_images: [
      "/assets/apps/card/Featured.png",
      "/assets/apps/collection/c2.png",
      "/assets/apps/collection/c3.png",
      "/assets/apps/collection/c4.png",
      "/assets/apps/collection/c5.png",
    ],
    title: "Ancestral Wisdom Series",
    author: "By Cultural Archives DAO",
    stories_count: 24,
    authors_count: 11,
    floor_price: 18765,
    total_content_count: 24,
    content_count: [
      { type: "Videos", count: 12 },
      { type: "Audio recordings", count: 8 },
      { type: "Text documents", count: 4 },
    ],
    about:
      "Rare collection of elder teachings and traditional knowledge passed down through generations. This collection contains authentic oral histories, traditional practices, and ancestral wisdom.",
    buyers_count: 24,
  },
];
