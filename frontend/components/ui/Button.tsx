import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? (React.Fragment as any) : "button"; // Simplified for now since we aren't using Radix Slot

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-ink text-paper hover:bg-ink/90": variant === 'primary',
            "bg-mist/20 text-ink hover:bg-mist/30": variant === 'secondary',
            "border border-ink bg-transparent hover:bg-ink hover:text-paper text-ink": variant === 'outline',
            "hover:bg-mist/10 hover:text-ink text-ink": variant === 'ghost',
            "h-9 px-4 text-sm": size === 'sm',
            "h-11 px-8 text-base": size === 'md',
            "h-14 px-10 text-lg": size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
