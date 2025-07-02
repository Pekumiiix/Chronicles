import Background from "@/components/custom/background";
import DiscoverTab from "./section/discover-tab-section";
import NotableStoryTellersSection from "./section/notable-story-tellers";
import PopularStories from "./section/popular-stories";

export default function DiscoverIcon() {
  return (
    <>
      <Background />

      <main className="w-full flex flex-col items-center gap-10 md:gap-[105px]">
        <section className="w-full container grid grid-cols-2">
          <div className="w-full flex flex-col gap-8 pr-12">
            <DiscoverTab />

            <NotableStoryTellersSection />
          </div>

          <div className="w-full pl-12 flex flex-col gap-6">
            <PopularStories />
          </div>
        </section>
      </main>
    </>
  );
}
