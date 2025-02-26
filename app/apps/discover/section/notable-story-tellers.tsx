import Image from "next/image";
import {
  notable_story_tellers,
  NotableStoryTellerProps,
} from "@/app/data/notable-story-tellers";
import StoryDetails from "@/components/custom/story-details";

export default function NotableStoryTellersSection() {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-semibold text-primary-foreground pb-3">
        Notable Storytellers
      </p>

      <div className="flex flex-col gap-3">
        {notable_story_tellers.map(
          (item: NotableStoryTellerProps, index: number) => (
            <div key={index} className="flex flex-col gap-3 w-full">
              <TellerCard
                pfp={item.pfp}
                name={item.name}
                country={item.country}
                stories_count={item.stories_count}
                followers={item.followers}
                value={item.value}
              />

              <div
                className={`${
                  index === 3 ? "hidden" : "flex"
                } w-full h-[1px] bg-[#F2F2F2]`}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

function TellerCard({
  pfp,
  name,
  country,
  stories_count,
  followers,
  value,
}: NotableStoryTellerProps) {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <div className="flex gap-4">
        <Image
          src={pfp}
          alt={name}
          width={44}
          height={44}
          className="rounded-[8px]"
        />

        <div className="flex flex-col">
          <p className="text-sm font-semibold text-primary-foreground">
            {name}
          </p>
          <p className="text-xs text-caption">{country}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <StoryDetails count={stories_count} name="Stories" />
        <StoryDetails count={followers} name="Followers" />
        <StoryDetails count={value} name="Value" />
      </div>
    </div>
  );
}
