import Seperator from "@/components/custom/seperator";
import VerifiedBadge from "@/components/custom/verified-badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { RenderIcon } from "@/app/utils/render-icons";
import { Collection } from "@/app/data/collection";
import { FormatCurrency } from "@/app/utils/format-number";
import clsx from "clsx";

export default function CollectionDetailsContainer({
  selectedCollection,
}: {
  selectedCollection: Collection;
}) {
  return (
    <div className="min-w-full flex gap-6 p-1 border border-[#F2F2F2] rounded-[20px]">
      <div className="w-2/3 min-h-full flex flex-col gap-7 rounded-2xl py-4 px-6 bg-hero-bg bg-center bg-cover">
        {selectedCollection.verified && <VerifiedBadge />}

        <div className="flex items-center">
          {selectedCollection.top_five_images.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt="User"
              width={104}
              height={96}
              className={clsx("rounded-[8px]", {
                "-ml-5": index !== 0,
              })}
            />
          ))}
          <p className="py-3 px-4 bg-white text-primary-foreground text-xs font-medium -ml-2.5 rounded-[8px]">
            +{selectedCollection.image_count - 5}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p className="text-[32px] font-extrabold">
              {selectedCollection.title}
            </p>
            <p className="text-lg text-secondary-foreground">
              {selectedCollection.author}
            </p>
          </div>

          <div className="flex items-center gap-8">
            <CollectionPreviewDetails
              image="/assets/apps/card/mint.png"
              alt="Book"
              text={selectedCollection.stories_count + " Stories"}
            />

            <CollectionPreviewDetails
              image="/assets/apps/card/authors.png"
              alt="Group of people"
              text={selectedCollection.authors_count + " Authors"}
            />
          </div>
        </div>
      </div>

      <CollectionDetails selectedCollection={selectedCollection} />
    </div>
  );
}

function CollectionDetails({
  selectedCollection,
}: {
  selectedCollection: Collection;
}) {
  return (
    <div className="w-1/3 flex flex-col gap-8 justify-between py-4 px-5 rounded-2xl bg-secondary">
      <p className="text-primary-foreground font-semibold text-base leading-[20px]">
        Collection Details
      </p>

      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col">
          <p className="text-sm text-secondary-foreground">Floor Price</p>
          <p className="text-primary-foreground font-semibold text-2xl">
            {FormatCurrency(selectedCollection.floor_price)}
          </p>
        </div>

        <Seperator orientation="horizontal" />

        <div className="flex flex-col">
          <p className="text-sm text-secondary-foreground">Total Content</p>
          <p className="text-primary-foreground font-semibold leading-[21px]">
            {selectedCollection.total_content_count} items
          </p>
        </div>

        <Seperator orientation="horizontal" />

        <div className="flex flex-col gap-2">
          {selectedCollection.content_count.map((item: ContentCount) => (
            <ContentCount key={item.type} {...item} />
          ))}
        </div>

        <Button variant={`blue`} className="w-full text-sm mt-4">
          Unlock Collection
        </Button>
      </div>
    </div>
  );
}

function CollectionPreviewDetails({
  image,
  alt,
  text,
}: {
  image: string;
  alt: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Image src={image} alt={alt} width={24} height={24} />
      <p className="text-sm text-primary-foreground">{text}</p>
    </div>
  );
}

function ContentCount({
  type,
  count,
}: {
  type: "Videos" | "Audio recordings" | "Text documents";
  count: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={RenderIcon(type)}
        alt={type + "icon"}
        width={16}
        height={16}
      />
      <p className="text-secondary-foreground text-xs">
        {count} {type}
      </p>
    </div>
  );
}

interface ContentCount {
  type: "Videos" | "Audio recordings" | "Text documents";
  count: number;
}
