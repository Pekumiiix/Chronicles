import Seperator from "@/components/custom/seperator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { nfts_collection_details } from "@/app/data/nft-collection-details";
import { Badge } from "@/components/ui/badge";
import VerifiedBadge from "@/components/custom/verified-badge";
import StoryDetails from "@/components/custom/story-details";

export default function FeaturedTab() {
  return (
    <div className="flex gap-2">
      <div className="flex items-end relative w-[264px] h-[264px] rounded-2xl px-1">
        <Image
          src={nfts_collection_details[0].image}
          alt={nfts_collection_details[0].title}
          width={264}
          height={264}
          className="absolute w-full h-full rounded-2xl"
        />
      </div>

      <div className="flex flex-col min-h-full justify-between gap-2 max-w-[231px]">
        <div className="flex flex-col gap-4 rounded-2xl px-3 pb-1 pt-4 bg-secondary">
          <p className="text-primary-foreground text-[10px]">
            {nfts_collection_details[0].preview}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {nfts_collection_details[0].categories.map((item: string) => (
              <Badge
                key={item}
                className="border border-stroke bg-[#D4D4DF] text-primary-foreground py-0.5 px-1.5 rounded-xl hover:bg-[#D4D4DF]"
              >
                {item}
              </Badge>
            ))}

            {nfts_collection_details[0].verified && <VerifiedBadge />}
          </div>

          <Button
            variant={`blue`}
            className="w-full h-[29px] text-xs font-normal"
          >
            Explore Collections
          </Button>
        </div>

        <div className="flex items-center justify-between bg-secondary py-4 px-3 gap-3 rounded-2xl">
          <StoryDetails
            image="/assets/apps/card/mint.png"
            count={24}
            name="Stories"
          />

          <StoryDetails
            image="/assets/apps/card/authors.png"
            count={11}
            name="Authors"
          />

          <Seperator />

          <StoryDetails
            image="/assets/apps/card/coins.png"
            count={`18k CHR`}
            name="Floor"
          />
        </div>
      </div>
    </div>
  );
}
