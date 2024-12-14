"use client";

import SectionDescription from "../components/section-description";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Twitter, Youtube, Instagram } from "lucide-react";
import DiscordIcon from "@/components/icons/discord";
import FacebookIcon from "@/components/icons/facebook";
import Link from "next/link";
import { ReactElement } from "react";

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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="hidden">Email</FormLabel>
                  <FormControl>
                    <AnimatedBorderWrapper className="flex items-center justify-center w-full h-[54px] rounded-[27px]">
                      <div className="absolute w-[calc(100%-4px)] h-[calc(100%-2px)] flex items-center p-[3px] pl-5 rouded-[27px] gap-8 bg-black">
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
                      </div>
                    </AnimatedBorderWrapper>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
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

function AnimatedBorderWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card-wrapper-two ${
        className ? className : "w-[196px] h-[148px] rounded-xl"
      }`}
    >
      {children}
    </div>
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
    icon: <Twitter size="32px" fill="#ffffff" color="#ffffff" />,
    bg: "bg-[#5865F2]",
  },
  {
    href: "/",
    icon: <Youtube size="32px" fill="#ffffff" color="#FF0000" />,
    bg: "bg-[#FF0000]",
  },
  {
    href: "/",
    icon: <Instagram size="32px" fill="white" color="#757575" />,
    bg: "bg-custom-conic",
  },
  {
    href: "/",
    icon: <FacebookIcon className="w-8 h-8 fill-white" />,
    bg: "bg-[#3D5A98]",
  },
];

interface LinkProps {
  href: string;
  icon: ReactElement;
  bg: string;
}
