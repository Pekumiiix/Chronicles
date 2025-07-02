export interface AllStoriesProp {
  image: string;
  type: "Videos" | "Audio recordings" | "Text documents";
  title: string;
  text_content: string;
  length: string;
  views: number;
}

export const all_stories: AllStoriesProp[] = [
  {
    image: "/assets/apps/card/Featured.png",
    type: "Videos",
    title: "Traditional Healing Methods",
    text_content:
      "Comprehensive documentation of medicinal plant knowledge, healing ceremonies, and ancestral therapeutic practices passed down through five generations of healers.",
    length: "15:24",
    views: 200,
  },
  {
    image: "/assets/apps/card/Featured.png",
    type: "Audio recordings",
    title: "Traditional Healing Methods",
    text_content:
      "Comprehensive documentation of medicinal plant knowledge, healing ceremonies, and ancestral therapeutic practices passed down through five generations of healers.",
    length: "15:24",
    views: 1200,
  },
  {
    image: "/assets/apps/card/Featured.png",
    type: "Text documents",
    title: "Traditional Healing Methods",
    text_content:
      "Comprehensive documentation of medicinal plant knowledge, healing ceremonies, and ancestral therapeutic practices passed down through five generations of healers.",
    length: "15:24",
    views: 1200,
  },
];
