import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: [
    // Layout
    'inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap select-none rounded-lg text-[0.9375rem] font-medium cursor-pointer',
    'px-4 h-9',
    // Transitions + cursor
    'transition-all duration-150 ease-out',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    // Icon sizing
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    // Border + outline (default neutral)
    'border border-[var(--color-border)]',
    // Focus ring (Windows accent glow)
    'outline-none focus-visible:ring-2 focus-visible:ring-offset-1',
    'focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-[var(--color-surface)]',
    // Hover elevation
    'hover:shadow-sm',
    // Text color default
    'text-[var(--color-surface-fg)]',
    // Pressed
    'active:translate-y-[0.5px]',
    // Invalid
    'aria-invalid:border-red-500/60 aria-invalid:ring-red-500/20',
  ].join(' '),
  variants: {
    variant: {
      solid: 'bg-surface shadow-xs',
      outline: 'bg-transparent hover:bg-surface/60',
      ghost: 'border-transparent bg-transparent hover:bg-surface/60',
      link: 'border-none bg-transparent shadow-none p-0 h-auto text-accent underline-offset-4 hover:underline',
    },
    action: {
      primary: '', // Windows accent
      secondary: '', // Neutral surface
      positive: '', // Win success
      negative: '', // Win danger
      neutral: '', // High-contrast black/white
    },
    size: {
      sm: 'h-8 px-3 rounded-md text-[0.875rem]',
      md: 'h-9 px-4 rounded-lg text-[0.9375rem]',
      lg: 'h-10 px-5 rounded-xl text-[1rem]',
      icon: 'size-9 p-0 rounded-lg [&_svg]:size-5',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      action: 'primary',
      class:
        'bg-accent text-accent-fg border-transparent hover:bg-accent/90 active:bg-[color:var(--color-accent)/.86] shadow-sm',
    },
    {
      variant: 'solid',
      action: 'secondary',
      class: 'bg-surface text-surface-fg hover:bg-surface/90',
    },
    {
      variant: 'solid',
      action: 'positive',
      class: 'bg-positive text-positive-fg border-transparent hover:bg-positive/90',
    },
    {
      variant: 'solid',
      action: 'negative',
      class: 'bg-negative text-negative-fg border-transparent hover:bg-negative/90',
    },
    {
      variant: 'solid',
      action: 'neutral',
      class: 'bg-bg-fg text-bg border-transparent hover:opacity-95',
    },
    // OUTLINE + ACTION
    {
      variant: 'outline',
      action: 'primary',
      class: 'border-accent text-accent hover:bg-accent/10',
    },
    {
      variant: 'outline',
      action: 'secondary',
      class: 'border-border text-surface-fg',
    },
    {
      variant: 'outline',
      action: 'positive',
      class: 'border-positive text-positive hover:bg-positive/10',
    },
    {
      variant: 'outline',
      action: 'negative',
      class: 'border-negative text-negative hover:bg-negative/10',
    },
    {
      variant: 'outline',
      action: 'neutral',
      class: 'border-surface-fg text-surface-fg',
    },

    // GHOST + ACTION
    {
      variant: 'ghost',
      action: 'primary',
      class: 'text-accent hover:bg-accent/10',
    },
    {
      variant: 'ghost',
      action: 'secondary',
      class: 'text-surface-fg',
    },
    {
      variant: 'ghost',
      action: 'positive',
      class: 'text-positive hover:bg-positive/10',
    },
    {
      variant: 'ghost',
      action: 'negative',
      class: 'text-negative hover:bg-negative/10',
    },
    {
      variant: 'ghost',
      action: 'neutral',
      class: 'text-surface-fg',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    action: 'secondary', // Windows default buttons are neutral/secondary; primary is accent
    size: 'md',
  },
});

function Button({
  className,
  variant,
  action,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button';
  return <Comp data-slot="button" className={buttonVariants({ variant, action, size, className })} {...props} />;
}

export { Button, buttonVariants };
