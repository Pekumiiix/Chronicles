import Image from "next/image";

export default function CardStack() {
  return (
    <div className="relative lg:absolute flex items-center h-[276px] w-[200px] md:h-[417px] md:w-[286px] lg:top-[50px] lg:right-[150px] z-0">
      <div className="w-full h-full opacity-50 rounded-3xl bg-[#E8E8E8] rotate-[-6deg] p-0">
        <img
          src="/assets/landing-page/brick.png"
          alt="Illustration"
          // width={286}
          // height={200}
          className="min-w-full min-h-full rotate-[6deg]"
        />
      </div>

      <div className="w-full h-full p-1 gap-2 bg-white flex flex-col items-start rounded-3xl shadow-stack-shadow absolute rotate-2">
        <Image
          src={`/assets/landing-page/stack.png`}
          alt="Illustration"
          width={278}
          height={345}
          className="rotate-[-2deg]"
        />

        <div className="flex items-center gap-[5px] px-2 w-full">
          <Image
            src={`/assets/landing-page/user-pfp.png`}
            alt="User Display Pictures"
            width={72}
            height={32}
            className="w-[45px] h-5 md:w-[72px] md:h-8"
          />

          <p className="text-caption text-[10px] md:text-xs">
            2k+ Active Users
          </p>

          <Image
            src={`/assets/landing-page/confetti.png`}
            alt="Confetti"
            width={10}
            height={17}
          />
        </div>
      </div>
    </div>
  );
}
