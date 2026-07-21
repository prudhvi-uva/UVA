import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-foreground text-background hover:bg-foreground/90": variant === 'primary',
            "bg-muted/20 text-foreground hover:bg-muted/30": variant === 'secondary',
            "border border-foreground bg-transparent hover:bg-foreground hover:text-background text-foreground": variant === 'outline',
            "hover:bg-muted/10 hover:text-foreground text-foreground": variant === 'ghost',
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
