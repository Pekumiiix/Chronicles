export interface NotableStoryTellerProps {
  pfp: string;
  name: string;
  country: string;
  stories_count: number;
  followers: number;
  value: string;
}

export const notable_story_tellers: NotableStoryTellerProps[] = [
  {
    pfp: "/assets/apps/story-tellers/lucky.png",
    name: "Lucky Martins",
    country: "Nigeria",
    stories_count: 24,
    followers: 1200,
    value: "12k CHR",
  },
  {
    pfp: "/assets/apps/story-tellers/yinka.png",
    name: "Olayimika",
    country: "Nigeria",
    stories_count: 24,
    followers: 1200,
    value: "12k CHR",
  },
  {
    pfp: "/assets/apps/story-tellers/outcast.png",
    name: "Outcast",
    country: "Nigeria",
    stories_count: 24,
    followers: 1200,
    value: "12k CHR",
  },
  {
    pfp: "/assets/apps/story-tellers/wisdom.png",
    name: "Wisdom",
    country: "Nigeria",
    stories_count: 24,
    followers: 1200,
    value: "12k CHR",
  },
];
