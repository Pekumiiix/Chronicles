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
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import DiscordIcon from "@/components/icons/discord";
import FacebookIcon from "@/components/icons/facebook";

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
    <section className="flex flex-col items-center gap-14 py-6 px-32">
      <div className="flex flex-col gap-10 max-w-[662px]">
        <SectionDescription
          title="Be Part of a Living Legacy"
          caption="Connect with storytellers, history enthusiasts, and cultural custodians shaping the future of our heritage."
          titleClass="text-5xl leading-[53px]"
          captionClass="text-xl w-full"
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
                    <div className="flex items-center border border-stroke p-[3px] pl-5 rounded-[27px] h-[54px] gap-8">
                      <Input
                        placeholder="Email address"
                        {...field}
                        className="text-xs font-medium placeholder:text-placeholder p-0 border-none ring-0 focus-visible:ring-0 shadow-none"
                      />
                      <Button
                        variant={`black`}
                        type="submit"
                        className="rounded-[24px] px-5 bg-[#070708]"
                        size={`black`}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="text-foreground font-semibold">
          Join our community and stay in the loop
        </p>

        <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-10 max-w-[248px]">
          <div className="p-3 rounded-xl bg-stroke">
            <DiscordIcon className="w-8 h-8 fill-caption" />
          </div>
          <div className="p-3 rounded-xl bg-stroke">
            <Twitter size="32px" color="#757575" />
          </div>
          <div className="p-3 rounded-xl bg-stroke">
            <Youtube size="32px" color="#757575" />
          </div>
          <div className="p-3 rounded-xl bg-stroke">
            <Instagram size="32px" color="#757575" />
          </div>
          <div className="p-3 rounded-xl bg-stroke">
            <FacebookIcon className="w-8 h-8 fill-caption" />
          </div>
        </div>
      </div>
    </section>
  );
}
