import Seperator from "@/app/apps/_components/seperator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { nfts_collection_details } from "@/app/data/nft-collection-details";
import { Badge } from "@/components/ui/badge";

export default function FeaturedTab() {
  return (
    <div className="flex gap-2">
      <div className="flex items-end relative w-[264px] h-[264px] rounded-2xl px-1">
        <Image
          src={nfts_collection_details[0].image}
          alt={nfts_collection_details[0].title}
          width={264}
          height={264}
          className="absolute w-full h-full -z-10 rounded-2xl"
        />

        {/* <div className="flex flex-col gap-2 py-3 px-4 rounded-xl  w-full">
          <p className="text-primary-foreground text-[10px]">
            {nfts_collection_details[0].author}
          </p>
          <p className="text-primary-foreground font-semibold text-sm">
            {nfts_collection_details[0].title}
          </p>
        </div> */}
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

            {nfts_collection_details[0].verified && (
              <Badge className="flex gap-0.5 border border-[#FFFDFC] bg-[#EAF6EA] text-[#008000] py-0.5 px-2 rounded-xl hover:bg-[#EAF6EA]">
                <Image
                  src={`/assets/apps/card/Sparkle.png`}
                  alt="Sparkle"
                  width={8}
                  height={8}
                />
                Verified
              </Badge>
            )}
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

export function StoryDetails({
  count,
  image,
  name,
}: {
  count: number | string;
  image?: string;
  name: string;
}) {
  return (
    <div className="flex flex-col">
      <p className="text-[10px] text-primary-foreground">{count}</p>
      <div className="flex items-center gap-1">
        {image && <Image src={image} alt={name} width={12} height={12} />}
        <p className="text-[8px] text-border">{name}</p>
      </div>
    </div>
  );
}
