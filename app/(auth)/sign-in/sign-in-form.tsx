import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FormBase, FormField } from "@/components/reusesable/base-form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { SocialLogin } from "../components/social-login";
import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { EmailInput } from "../components/email-input";

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const passwordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const signInSchema = emailSchema.merge(passwordSchema);

export default function SignInForm({
  setTitle,
  setDescription,
  onSwitch,
  setRemoveCancel,
}: IFormProps) {
  const [email, setEmail] = useState("");
  const [isSecondForm, setIsSecondForm] = useState(false);

  useEffect(() => {
    setTitle("Sign In to Chronicles");
    setDescription(
      "Sign in to continue from where you left off on your legacy journey 🎊."
    );
  }, [setTitle, setDescription]);

  return isSecondForm ? (
    <SecondForm email={email} setRemoveCancel={setRemoveCancel} />
  ) : (
    <FirstForm
      setEmail={setEmail}
      setIsSecondForm={setIsSecondForm}
      onSwitch={onSwitch}
    />
  );
}

function FirstForm({
  setEmail,
  setIsSecondForm,
  onSwitch,
}: {
  setEmail: (email: string) => void;
  setIsSecondForm: (isSecondForm: boolean) => void;
  onSwitch: IFormProps["onSwitch"];
}) {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof emailSchema>) {
    console.log("Form submitted with data:", data);
    setEmail(data.email);
    setIsSecondForm(true);
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <SocialLogin />

      <div className="flex flex-col gap-3">
        <FormBase
          form={form}
          onSubmit={onSubmit}
          className="flex items-center p-2 pl-4 bg-[#F2F2F2] rounded-[12px]"
        >
          <EmailInput
            form={form}
            name="email"
            Icon={ArrowRight}
            type="submit"
          />
        </FormBase>

        <Button
          type="button"
          variant="outline"
          className="py-3 px-6 rounded-[12px] flex items-center justify-center gap-2 border-stroke h-12 hover:bg-black/5"
        >
          <Image
            src="/assets/auth/wallet.png"
            alt="wallet"
            width={20}
            height={20}
          />
          <span className="text-caption text-sm leading-[170%]">
            Connect Wallet Instead
          </span>
        </Button>

        <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-caption leading-[170%]">
            Don&apos;t have an account?
          </p>
          <Button
            variant="link"
            className="text-[#165EAF] text-sm leading-[170%] font-semibold p-0 w-fit h-fit hover:bg-transparent hover:text-[#165EAF]"
            onClick={onSwitch}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

function SecondForm({
  email,
  setRemoveCancel,
}: {
  email: string;
  setRemoveCancel: IFormProps["setRemoveCancel"];
}) {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: email,
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof signInSchema>) {
    console.log(data);
  }

  useEffect(() => {
    setRemoveCancel(false);
  });

  return (
    <FormBase
      form={form}
      onSubmit={onSubmit}
      className="h-full flex flex-col gap-[100px] justify-between"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center p-2 pl-4 bg-[#F2F2F2] rounded-[12px]">
          <EmailInput form={form} name="email" Icon={Check} />
        </div>

        <FormField form={form} name="password">
          {(field) => (
            <Input
              {...field}
              type="password"
              placeholder="Enter your password"
              className="h-12 pl-4 rounded-[12px] focus-visible:ring-0 bg-transparent text-sm leading-[170%] placeholder:text-caption text-black border-none bg-[#F2F2F2]"
            />
          )}
        </FormField>
      </div>
      <Button type="submit" variant="blue" className="w-full h-12">
        Sign In
      </Button>
    </FormBase>
  );
}

interface IFormProps {
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onSwitch: () => void;
  setRemoveCancel: (removeCancel: boolean) => void;
}
