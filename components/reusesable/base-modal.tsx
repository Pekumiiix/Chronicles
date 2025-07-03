"use client";

/**
 * A reusable modal component built on top of shadcn/ui Dialog.
 * Provides a flexible way to display content in a modal dialog with various customization options.
 * Supports different sizes, footer content, and overlay behaviors.
 *
 * @example
 * ```tsx
 * <BaseModal
 *   trigger={<Button>Open Modal</Button>}
 *   title="Modal Title"
 *   description="Modal description"
 *   size="large"
 *   hasFooter
 *   footerContent={<Button>Close</Button>}
 * >
 *   <div>Modal content goes here</div>
 * </BaseModal>
 * ```
 */
import type { ReactNode } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/auth";

interface CustomModalProps {
  /** Trigger element that opens the modal (usually a button) */
  trigger?: ReactNode;
  /** Modal title (visually hidden by default) */
  title: string;
  /** Modal description (visually hidden by default) */
  description: string;
  /** Modal content */
  children: ReactNode;
  /** Additional CSS classes for the modal */
  className?: string;
  /** Controlled open state */
  open?: boolean;
  /** Callback when modal closes */
  onClose?: (open: boolean) => void;
  /** Whether to remove the default cancel button */
  removeCancel?: boolean;
  /** Whether to disable closing on overlay click */
  disableOverlayClick?: boolean;
  /** Whether to cancel on overlay click */
  cancelOnOverlay?: boolean;
}

/**
 * Base modal component that provides a consistent way to display content in a modal dialog.
 * Supports various customization options including size, footer, and overlay behaviors.
 */
function BaseModal({
  trigger,
  title,
  description,
  children,
  open,
  onClose,
  removeCancel = true,
  className,
  disableOverlayClick = false,
}: CustomModalProps) {
  const router = useRouter();
  const { closeAuthModal } = useAuth();

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          onClose?.(open);
        }
      }}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={cn(
          "max-w-[574px] min-h-[500px] w-full py-10 px-14 flex flex-col gap-10 rounded-[32px] bg-white",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        onInteractOutside={(e) => {
          if (disableOverlayClick) {
            e.preventDefault();
          }
        }}
      >
        {!removeCancel && (
          <div className="absolute max-w-[462px] top-5 flex w-full items-center justify-between opacity-60 py-2">
            <Button
              onClick={() => router.back()}
              className="p-1 w-fit h-fit bg-transparent hover:bg-transparent"
            >
              <ArrowLeft color="#000000" size={24} />
            </Button>

            <DialogClose
              onClick={closeAuthModal}
              className="min-w-6 z-10 relative p-1 w-fit h-fit"
            >
              <X color="#000000" size={24} className="min-w-6" />
            </DialogClose>
          </div>
        )}

        <DialogHeader className="w-full flex flex-col items-center gap-2">
          <div className="p-4 size-16">
            <Image src="/assets/logo.png" alt="Logo" width={20} height={24} />
          </div>
          <DialogTitle className="font-semibold leading-[130%] text-2xl text-[#080808] text-center">
            {title}
          </DialogTitle>

          <DialogDescription className="text-sm leading-[170%] text-caption text-center">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="w-full h-full flex flex-col">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export default BaseModal;
