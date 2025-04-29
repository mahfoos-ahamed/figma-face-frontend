import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-center font-bold rounded-[92px] border-black border-solid border-8 transition-all focus:outline-none focus:ring-2 focus:ring-black",
  {
    variants: {
      variant: {
        primary: "bg-[rgba(186,230,255,1)] hover:bg-[rgba(166,210,235,1)]",
        secondary: "bg-[rgba(255,220,88,1)] hover:bg-[rgba(235,200,68,1)]",
      },
      size: {
        default: "px-[55px] py-[30px] text-[29px]",
        sm: "px-[35px] py-[20px] text-[24px]",
        lg: "px-[65px] py-[35px] text-[32px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "rotate-[0.009484479136687833rad]",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
