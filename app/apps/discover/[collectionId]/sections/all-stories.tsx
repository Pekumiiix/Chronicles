"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { RenderAlt, RenderIcon, RenderType } from "@/app/utils/render-icons";
import { FormatViews } from "@/app/utils/format-number";
import { all_stories, AllStoriesProp } from "@/app/data/stories";
import Seperator from "@/components/custom/seperator";
import { truncate } from "@/app/utils/truncate";
import CustomDot from "@/components/custom/custom-dot";
import React from "react";

export default function AllStories() {
  const [displayStyle, setDisplayStyle] = useState<"List" | "Grid">("List");

  return (
    <div className="w-full flex flex-col py-4 gap-8">
      <div className="w-full flex items-center justify-between">
        <p className="text-primary-foreground text-lg font-semibold">
          All Stories
        </p>

        <div className="flex items-center rounded-md bg-[#F2F2F2]">
          {displayToggleBtns.map((item) => {
            const isActive = displayStyle === item.name;

            return (
              <Button
                key={item.name}
                onClick={() => setDisplayStyle(item.name)}
                className={clsx(
                  "py-1.5 px-3 gap-1 text-xs text-secondary-foreground transition-colors duration-300 ease-in",
                  {
                    "bg-[#FFFDFC] hover:bg-[#FFFDFC]": isActive,
                    "bg-transparent hover:bg-transparent": !isActive,
                    "rounded-r-none": item.name === "List",
                    "rounded-l-none": item.name === "Grid",
                  }
                )}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={20}
                  height={20}
                />
                {item.name}
              </Button>
            );
          })}
        </div>
      </div>

      <div
        className={clsx("w-full flex gap-6", {
          "flex-col": displayStyle === "List",
          "flex-row items-center overflow-x-scroll collection-card-container":
            displayStyle === "Grid",
        })}
      >
        {all_stories.map((item, index) => (
          <React.Fragment key={item.title}>
            {displayStyle === "List" ? (
              <ListSyleStoryCard {...item} />
            ) : (
              <GridStyleStoryCard {...item} />
            )}

            {displayStyle === "List" ? (
              <Seperator
                orientation="horizontal"
                className={index === all_stories.length - 1 ? "hidden" : ""}
              />
            ) : (
              <CustomDot
                className={index === all_stories.length - 1 ? "hidden" : ""}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ListSyleStoryCard({
  image,
  type,
  title,
  text_content,
  length,
  views,
}: AllStoriesProp) {
  return (
    <div className="w-full flex items-center py-4 justify-between">
      <div className="flex items-center gap-8">
        <Image src={image} alt={title} width={156} height={84} />

        <div className="flex flex-col gap-3 justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <Image
                src={RenderIcon(type)}
                alt={RenderAlt(type)}
                width={20}
                height={20}
              />

              <p className="text-primary-foreground font-semibold">{title}</p>
            </div>

            <p className="text-secondary-foreground  text-sm">{text_content}</p>
          </div>

          <div className="flex items-center gap-2">
            <StoryInfomation type={type} length={length} views={views} />
          </div>
        </div>
      </div>

      <PlayButton layout="list" />
    </div>
  );
}

function GridStyleStoryCard({
  image,
  type,
  title,
  text_content,
  length,
  views,
}: AllStoriesProp) {
  return (
    <div className="min-w-[312px] flex flex-col gap-2 p-4 border border-secondary rounded-xl bg-white">
      <div className="relative w-full min-h-[156px] rounded-xl">
        <Image
          src={image}
          alt={title}
          width={286}
          height={156}
          className="rounded-xl"
        />
        <div className="absolute bottom-5 right-5 flex items-center py-1 px-2 gap-1 bg-white rounded-[8px]">
          <Image
            src={RenderIcon(type)}
            alt={RenderAlt(type)}
            width={12}
            height={12}
          />
          <p className="text-[10px] text-secondary-foreground">
            {RenderType(type)}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-primary-foreground font-semibold leading-[21px]">
          {title}
        </p>
        <p className="text-secondary-foreground text-sm">
          {truncate(text_content, 38)}
        </p>
        <StoryInfomation
          layout="grid"
          type={type}
          length={length}
          views={views}
        />
        <PlayButton layout="grid" />
      </div>
    </div>
  );
}

function StoryInfomation({
  layout = "list",
  length,
  views,
  type,
}: {
  layout?: "list" | "grid";
  length: string;
  views: number;
  type: "Videos" | "Audio recordings" | "Text documents";
}) {
  return (
    <div
      className={clsx("flex items-center", {
        "gap-2 my-2": layout === "grid",
        "gap-8": layout === "list",
      })}
    >
      <div className="flex gap-1 items-center">
        <Image
          src={`/assets/apps/collection/Clock.png`}
          alt={`Clock`}
          width={16}
          height={16}
        />
        <p className="text-xs text-secondary-foreground">
          {length} {RenderText(type)}
        </p>
      </div>

      <div className="flex gap-1 items-center">
        <Image
          src={`/assets/apps/collection/Eye.png`}
          alt="Eye ball"
          width={16}
          height={16}
        />
        <p className="text-xs text-secondary-foreground">
          {FormatViews(views)} Views
        </p>
      </div>
    </div>
  );
}

function RenderText(type: "Videos" | "Audio recordings" | "Text documents") {
  if (type === "Videos" || type === "Audio recordings") {
    return "Min";
  } else {
    return "Min read";
  }
}

function PlayButton({ layout }: { layout: "grid" | "list" }) {
  return (
    <Button
      className={clsx(
        "h-7 bg-[#165EAF]/10 hover:bg-[#165EA1F]/20 flex items-center justify-center text-xs text-[#165EAF] hover:text-[#165EAF] gap-2",
        { "w-[72px]": layout === "list", "w-full": layout === "grid" }
      )}
    >
      <Image
        src={`/assets/apps/collection/Airplay.png`}
        alt="Airplay"
        width={16}
        height={16}
      />
      Play
    </Button>
  );
}

const displayToggleBtns: DisplayToggleBtnProps[] = [
  { name: "List", image: "/assets/apps/collection/list.png" },
  { name: "Grid", image: "/assets/apps/collection/grid.png" },
];

interface DisplayToggleBtnProps {
  name: "List" | "Grid";
  image: string;
}
