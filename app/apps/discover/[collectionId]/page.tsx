import AboutCollection from "./sections/about-collection";
import AllStories from "./sections/all-stories";
import CollectionDetailsContainer from "./sections/collection-details-ctn";
import { collection } from "@/app/data/collection";

export default async function CollectiobPage({
  params,
}: {
  params: Promise<{ collectionId: string }>;
}) {
  const { collectionId } = await params;

  const sellectedCollection = collection.find(
    (item) => item.id === Number.parseInt(collectionId)
  );

  if (!sellectedCollection) {
    return (
      <div className="flex items-center justify-center w-full h-[calc(100vh-100px)]"></div>
    );
  }

  return (
    <main className="w-full flex flex-col items-center gap-10 md:gap-[105px]">
      <section className="container max-w-[870px] flex flex-col gap-12 items-center">
        <CollectionDetailsContainer selectedCollection={sellectedCollection} />

        <AboutCollection selectedCollection={sellectedCollection} />

        <AllStories />
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  // Return an array of all possible params
  // Example:
  return collection.map((item) => ({
    collectionId: item.id.toString(),
  }));
}
