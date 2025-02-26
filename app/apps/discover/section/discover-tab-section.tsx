import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeaturedTab from "./tabs/featured";
import Image from "next/image";

export default function DiscoverTab() {
  return (
    <Tabs defaultValue="Featured" className="w-full flex flex-col gap-2">
      <TabsList className="w-fit bg-transparent flex items-center gap-8">
        {tab_triggers.map((item: string) => (
          <TabsTrigger
            key={item}
            value={item}
            className="group flex items-center gap-2 text-sm font-semibold text-caption shadow-none data-[state=active]:bg-transparent data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            {item}

            <Image
              src={`/assets/landing-page/Sparkle.png`}
              alt="Sparkle"
              width={10}
              height={10}
              className="hidden group-data-[state=active]:flex"
            />
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="Featured">
        <FeaturedTab />
      </TabsContent>
      <TabsContent value="password">
        <p>hello</p>
      </TabsContent>
    </Tabs>
  );
}

const tab_triggers: string[] = ["Featured", "Browse", "Recents"];
