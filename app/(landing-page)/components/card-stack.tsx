import Image from "next/image";

export default function CardStack() {
  return (
    <div className="relative lg:absolute flex items-center h-[417px] w-[286px] lg:-top-[50px] lg:left-[150px] -z-10">
      <div className="w-full h-full opacity-50 rounded-3xl bg-[#E8E8E8] rotate-[-6deg]" />

      <div className="w-full h-full p-1 bg-white flex items-start justify-center rounded-3xl shadow-stack-shadow absolute rotate-2">
        <Image
          src={`/assets/landing-page/stack.png`}
          alt="Illustration"
          width={278}
          height={345}
          className="rotate-[-2deg]"
        />
      </div>
    </div>
  );
}
