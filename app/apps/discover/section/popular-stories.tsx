import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Seperator from "../../_components/seperator";
import { top_card_details } from "@/app/data/nft-card-details";
import { Item } from "@radix-ui/react-accordion";
import clsx from "clsx";

export default function PopularStories() {
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="flex gap-4">
          <SelectCategory />

          {selectedCategories.length !== 0 && (
            <div className="flex items-center gap-2">
              {selectedCategories.map((item: string) => (
                <p
                  key={item}
                  className="text-[10px] text-caption py-0.5 px-3 rounded-xl border border-stroke"
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          {top_card_details.slice(0, 4).map((item, index: number) => (
            <div key={item.title} className="flex flex-col gap-6">
              <StoryCard
                image={item.image}
                story_title={item.title}
                story_author={item.caption}
                category={item.category}
                pfps={[
                  "/assets/apps/story-tellers/lucky.png",
                  "/assets/apps/story-tellers/yinka.png",
                  "/assets/apps/story-tellers/outcast.png",
                ]}
                owners_count={item.owners_count}
                floor_price={item.floor_price}
              />

              <div
                className={`${
                  index === 3 ? "hidden" : "flex"
                } w-full h-[1px] bg-stroke`}
              />
            </div>
          ))}
        </div>

        <Statistics />
      </div>
    </>
  );
}

function SelectCategory() {
  return (
    <Select>
      <SelectTrigger className="w-fit text-xs text-caption rounded-[8px] border-b-2 border-stroke">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((item: string) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function StoryCard({
  image,
  story_title,
  story_author,
  category,
  pfps,
  owners_count,
  floor_price,
}: StoryCardProps) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt=""
          width={72}
          height={72}
          className="rounded-[8px] h-[72px] w-[72px]"
        />

        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <p className="text-primary-foreground font-semibold">
              {story_title}
            </p>
            <p className="text-caption text-sm">{story_author}</p>
          </div>
          <p className="text-[10px] text-primary-foreground">{category}</p>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <div className="flex">
            {pfps.map((item: string, index: number) => (
              <Image
                key={index}
                src={item}
                alt="User"
                width={24}
                height={24}
                className={clsx("rounded-full", {
                  "-ml-2.5": index === 1 || index === 2,
                })}
              />
            ))}
          </div>

          <p className="text-[10px] text-caption">+{owners_count} Owners</p>
        </div>

        <Seperator />

        <div className="flex flex-col items-center">
          <p className="text-sm text-primary-foreground">{floor_price}</p>
          <p className="text-[10px] text-caption">Floor</p>
        </div>
      </div>
    </div>
  );
}

function Statistics() {
  return (
    <div className="flex flex-col bg-white p-5 rounded-[15px] gap-3 sticky bottom-5">
      <p className="text-sm font-semibold">Today's Statistics</p>

      <div className="flex w-full items-center justify-between">
        <StatisticsCard
          image="/assets/apps/card/Fire.png"
          name="Most Valued Story"
          value="99k CHR"
        />
        <StatisticsCard
          image="/assets/apps/card/mint.png"
          name="Stories Minted"
          value="1,247"
        />
        <StatisticsCard
          image="/assets/apps/card/validators.png"
          name="Active Validators"
          value="324"
        />
      </div>
    </div>
  );
}

function StatisticsCard({
  image,
  name,
  value,
}: {
  image: string;
  name: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={clsx(
          "flex items-center justify-center h-9 w-9 rounded-[8px]",
          {
            "bg-[#FFECE4]": name === "Most Valued Story",
            "bg-[#E4F5FF]": name === "Stories Minted",
            "bg-[#EAF6EA]": name === "Active Validators",
          }
        )}
      >
        <Image src={image} alt="" width={20} height={20} />
      </div>

      <div className="flex flex-col">
        <p className="text-caption text-[10px]">{name}</p>
        <p className="text-primary-foreground text-xs font-semibold">{value}</p>
      </div>
    </div>
  );
}

const categories: string[] = [
  "Historical Narratives",
  "Folklore & Myths",
  "Proverbs and Riddles",
  "Traditional Knowledge",
  "Songs and Chants",
  "Customary Laws and Norms",
];

const selectedCategories: string[] = [];

interface StoryCardProps {
  image: string;
  story_title: string;
  story_author: string;
  category: string;
  pfps: string[];
  owners_count: number;
  floor_price: string;
}
