import Image from "next/image";

export default function StoryDetails({
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
      <p className="text-xs text-primary-foreground">{count}</p>
      <div className="flex items-center gap-1">
        {image && <Image src={image} alt={name} width={12} height={12} />}
        <p className="text-[10px] text-border">{name}</p>
      </div>
    </div>
  );
}
