import { FormField } from "@/components/reusesable/base-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import type { LucideIcon } from "lucide-react";

export function EmailInput<T extends FieldValues>({
  form,
  name,
  Icon,
  type = "button",
}: IEmailInputProps<T>) {
  return (
    <>
      <FormField form={form} name={name} className="w-full py-0 h-fit">
        {(field) => (
          <Input
            {...field}
            placeholder="Enter your email"
            className="px-0 focus-visible:ring-0 bg-transparent text-sm leading-[170%] placeholder:text-caption text-black border-none shadow-none"
          />
        )}
      </FormField>
      <Button
        type={type}
        variant="blue"
        disabled={form.getValues(name).length < 10}
        className="p-2 rounded-[8px]"
      >
        <Icon color="#ffffff" size={16} />
      </Button>
    </>
  );
}

interface IEmailInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  Icon: LucideIcon;
  type?: "button" | "submit";
}
