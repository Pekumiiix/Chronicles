"use client";

import SectionDescription from "../../../components/custom/section-description";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DiscordIcon from "@/components/icons/discord";
import Link from "next/link";
import { ReactElement } from "react";
import XIcon from "@/components/icons/X";
import InstagramIcon from "@/components/icons/instagram";
import FacebookIcon02 from "@/components/icons/facebook02";
import YoutubeIcon from "@/components/icons/youtube";
import { BorderBeam } from "@/components/magicui/border-beam";
import { FormBase, FormField } from "@/components/reusesable/base-form";

const formSchema = z.object({
  email: z.string().email({
    message: "Provide a valid email address.",
  }),
});

export default function JoinUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="max-w-[1536px] min-w-full flex flex-col items-center gap-14 py-[72px] md:py-[96px] px-5 md:px-32 bg-[#000000]">
      <div className="flex flex-col gap-10 max-w-[662px]">
        <SectionDescription
          title="Be Part of a Living Legacy"
          caption="Connect with storytellers, history enthusiasts, and cultural custodians shaping the future of our heritage."
          titleClass="md:text-5xl md:leading-[53px] text-center md:text-left text-white"
          captionClass="md:text-xl w-full text-[#9A9A9A]"
        />

        <FormBase
          form={form}
          onSubmit={onSubmit}
          className="max-w-[662px] w-full"
        >
          <FormField form={form} name="email">
            {(field) => (
              <div className="relative w-full h-[54px] flex items-center p-[3px] pl-5 rouded-[27px] gap-8 bg-black border border-white/20 rounded-[27px]">
                <Input
                  placeholder="Email address"
                  {...field}
                  className="text-xs text-white font-medium placeholder:text-placeholder p-0 border-none ring-0 focus-visible:ring-0 shadow-none"
                />
                <Button
                  type="submit"
                  className="rounded-[24px] px-5 h-full bg-[#A10145]"
                >
                  Sign Up
                </Button>
                <BorderBeam size={150} />
              </div>
            )}
          </FormField>
        </FormBase>
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="text-white font-semibold">
          Join our community and stay in the loop
        </p>

        <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-10 max-w-[248px]">
          {community_links.map((item: LinkProps, index: number) => (
            <Link
              href={item.href}
              key={index}
              className={`p-3 ${item.bg} rounded-xl translate-y-0 scale-100 shadow-none hover:translate-y-[-5px] hover:scale-105 hover:shadow-md transition-all duration-300`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const community_links: LinkProps[] = [
  {
    href: "/",
    icon: <DiscordIcon className="w-8 h-8 fill-white" />,
    bg: "bg-[#5865F2]",
  },
  {
    href: "/",
    icon: <XIcon className="w-8 h-8" />,
    bg: "bg-black",
  },
  {
    href: "/",
    icon: <YoutubeIcon className="w-8 h-8" />,
    bg: "bg-white",
  },
  {
    href: "/",
    icon: <InstagramIcon className="w-8 h-8" />,
    bg: "bg-custom-conic",
  },
  {
    href: "/",
    icon: <FacebookIcon02 className="w-8 h-8" />,
    bg: "bg-[#3D5A98]",
  },
];

interface LinkProps {
  href: string;
  icon: ReactElement;
  bg: string;
}
