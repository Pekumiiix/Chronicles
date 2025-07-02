import { Button } from "@/components/ui/button";
import Image from "next/image";
import clsx from "clsx";
import { Collection } from "@/app/data/collection";

export default function AboutCollection({
  selectedCollection,
}: {
  selectedCollection: Collection;
}) {
  return (
    <div className="w-full flex flex-col py-4 gap-4">
      <p className="text-lg font-semibold text-primary-foreground">
        About this collection
      </p>

      <p className="text-secondary-foreground">{selectedCollection.about}</p>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          {tagList.map((item: TagContainerProps) => (
            <TagContainer key={item.text} {...item} />
          ))}
        </div>

        <div className="flex items-center">
          {[
            "/assets/apps/story-tellers/lucky.png",
            "/assets/apps/story-tellers/yinka.png",
            "/assets/apps/story-tellers/outcast.png",
          ].map((item, index) => (
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
          <p className="text-xs text-secondary-foreground ml-1">
            +{selectedCollection.buyers_count} Buyers
          </p>
        </div>
      </div>
    </div>
  );
}

function TagContainer({ image, alt, text }: TagContainerProps) {
  return (
    <Button
      variant={`outline`}
      className={clsx(
        "flex items-center gap-1.5 py-1 px-3 rounded-full w-fit h-fit",
        {
          "text-[#165EAF] hover:text-[#165EAF] hover:bg-[#165EAF]/10":
            text === "Share",
          "text-secondary-foreground hover:text-secondary-foreground hover:bg-[#165EAF]/10":
            text === "Save",
        }
      )}
    >
      <Image src={image} alt={alt} width={16} height={16} />

      {text}
    </Button>
  );
}

const tagList: TagContainerProps[] = [
  {
    image: "/assets/apps/collection/ShareNetwork.png",
    alt: "Share",
    text: "Share",
  },
  {
    image: "/assets/apps/collection/bookmark.png",
    alt: "Bookmark",
    text: "Save",
  },
];

interface TagContainerProps {
  image: string;
  alt: string;
  text: "Save" | "Share";
}
