import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    // Layout
    "inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap select-none",
    // Shape + spacing (Win11 ~8px radius)
    "rounded-lg text-[0.9375rem] font-medium", // 15px-ish Win text scale
    "px-4 h-9",
    // Transitions + cursor
    "transition-all duration-150 ease-out",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    // Icon sizing
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    // Border + outline (default neutral)
    "border border-[var(--color-border)]",
    // Focus ring (Windows accent glow)
    "outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
    "focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-[var(--color-surface)]",
    // Hover elevation
    "hover:shadow-sm",
    // Text color default
    "text-[var(--color-surface-fg)]",
    // Pressed
    "active:translate-y-[0.5px]",
    // Invalid
    "aria-invalid:border-red-500/60 aria-invalid:ring-red-500/20",
  ].join(" "),
  variants: {
    variant: {
      solid: [
        "bg-[var(--color-surface)]", // overridden by action compound
        "shadow-xs",
      ].join(" "),
      outline: [
        "bg-[color:transparent]",
        "hover:bg-[color:var(--color-surface)/.6]",
      ].join(" "),
      ghost: [
        "border-transparent",
        "bg-transparent",
        "hover:bg-[color:var(--color-surface)/.6]",
      ].join(" "),
      link: [
        "border-none bg-transparent shadow-none p-0 h-auto",
        "text-[var(--color-accent)] underline-offset-4 hover:underline",
      ].join(" "),
    },
    action: {
      // semantic intent
      primary: "",     // Windows accent
      secondary: "",   // Neutral surface
      positive: "",    // Win success
      negative: "",    // Win danger
      neutral: "",     // High-contrast black/white
    },
    size: {
      sm: "h-8 px-3 rounded-md text-[0.875rem]",
      md: "h-9 px-4 rounded-lg text-[0.9375rem]",
      lg: "h-10 px-5 rounded-xl text-[1rem]",
      icon: "size-9 p-0 rounded-lg [&_svg]:size-5",
    },
  },
  compoundVariants: [
    // SOLID + ACTION
    {
      variant: "solid",
      action: "primary",
      class: [
        "bg-[var(--color-accent)] text-[var(--color-accent-fg)] border-transparent",
        "hover:bg-[color:var(--color-accent)/.92]",
        "active:bg-[color:var(--color-accent)/.86]",
        "shadow-sm",
      ].join(" "),
    },
    {
      variant: "solid",
      action: "secondary",
      class: [
        "bg-[var(--color-surface)] text-[var(--color-surface-fg)]",
        "hover:bg-[color:var(--color-surface)/.9]",
      ].join(" "),
    },
    {
      variant: "solid",
      action: "positive",
      class: [
        // Win success approx #0F7B0F
        "bg-[#0f7b0f] text-white border-transparent",
        "hover:bg-[#0d6d0d]",
      ].join(" "),
    },
    {
      variant: "solid",
      action: "negative",
      class: [
        // Win danger approx #C42B1C
        "bg-[#c42b1c] text-white border-transparent",
        "hover:bg-[#ae2518]",
      ].join(" "),
    },
    {
      variant: "solid",
      action: "neutral",
      class: [
        "bg-[var(--color-bg-fg)] text-[var(--color-bg)] border-transparent",
        "hover:opacity-95",
      ].join(" "),
    },

    // OUTLINE + ACTION
    {
      variant: "outline",
      action: "primary",
      class: [
        "border-[var(--color-accent)] text-[var(--color-accent)]",
        "hover:bg-[color:var(--color-accent)/.10]",
      ].join(" "),
    },
    {
      variant: "outline",
      action: "secondary",
      class: [
        "border-[var(--color-border)] text-[var(--color-surface-fg)]",
      ].join(" "),
    },
    {
      variant: "outline",
      action: "positive",
      class: "border-[#0f7b0f] text-[#0f7b0f] hover:bg-[color:#0f7b0f]/10",
    },
    {
      variant: "outline",
      action: "negative",
      class: "border-[#c42b1c] text-[#c42b1c] hover:bg-[color:#c42b1c]/10",
    },
    {
      variant: "outline",
      action: "neutral",
      class: "border-[var(--color-surface-fg)] text-[var(--color-surface-fg)]",
    },

    // GHOST + ACTION
    {
      variant: "ghost",
      action: "primary",
      class: "text-[var(--color-accent)] hover:bg-[color:var(--color-accent)/.10]",
    },
    {
      variant: "ghost",
      action: "secondary",
      class: "text-[var(--color-surface-fg)]",
    },
    {
      variant: "ghost",
      action: "positive",
      class: "text-[#0f7b0f] hover:bg-[color:#0f7b0f]/10",
    },
    {
      variant: "ghost",
      action: "negative",
      class: "text-[#c42b1c] hover:bg-[color:#c42b1c]/10",
    },
    {
      variant: "ghost",
      action: "neutral",
      class: "text-[var(--color-surface-fg)]",
    },
  ],
  defaultVariants: {
    variant: "solid",
    action: "secondary", // Windows default buttons are neutral/secondary; primary is accent
    size: "md",
  },
});

function Button({
  className,
  variant,
  action,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={buttonVariants({ variant, action, size, className })}
      {...props}
    />
  );
}

export { Button, buttonVariants };
