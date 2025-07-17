"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const ButtonVariants = cva("inline-flex", {
  variants: {
    variant: {
      default: "outline outline-accent rounded-full hover:bg-accent hover:text-primary  text-accent font-[700] ",
      outline: "outline outline-secondary rounded-full"
    },
    size: {
      lg: "px-[32px] py-[12px]",
      md: "px-[24px] py-[9px]",
      sm: "px-[16px] py-[6px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "lg",
  },
});

 function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof ButtonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot={"button"}
      className={cn(ButtonVariants({variant, size, className}))}
      {...props}
    />
  );
}

export { Button, ButtonVariants };
