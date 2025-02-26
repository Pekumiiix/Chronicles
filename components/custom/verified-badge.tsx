import { Badge } from "../ui/badge";
import Image from "next/image";

export default function VerifiedBadge() {
  return (
    <Badge className="w-fit flex gap-0.5 border border-[#FFFDFC] bg-[#EAF6EA] text-[#008000] py-0.5 px-2 rounded-xl hover:bg-[#EAF6EA]">
      <Image
        src={`/assets/apps/card/Sparkle.png`}
        alt="Sparkle"
        width={8}
        height={8}
      />
      Verified
    </Badge>
  );
}
