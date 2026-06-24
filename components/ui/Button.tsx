import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "inverse" | "outline-light" | "secondary" | "tertiary";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm tracking-wide transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

const primaryShadow =
  "shadow-[0_1px_2px_rgba(5,26,36,0.1),0_4px_4px_rgba(5,26,36,0.09),0_9px_6px_rgba(5,26,36,0.05),inset_0_2px_8px_rgba(255,255,255,0.35)]";
const secondaryShadow = "shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]";

/**
 * primary/secondary/tertiary are the current editorial-redesign trio (dark /
 * white / minimal). outline/ghost/inverse/outline-light are kept for older
 * pages (about/services/contact/etc.) that still reference them.
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary: `bg-charcoal text-ivory hover:bg-secondary-dark ${primaryShadow}`,
  secondary: `bg-ivory text-charcoal hover:bg-ivory-soft ${secondaryShadow}`,
  tertiary: "text-charcoal hover:text-gold-strong underline-offset-4 hover:underline px-2",
  outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory",
  ghost: "text-charcoal hover:text-gold-strong underline-offset-4 hover:underline px-2",
  inverse: "bg-gold text-charcoal hover:bg-ivory",
  "outline-light": "border border-ivory text-ivory hover:bg-ivory hover:text-charcoal",
};

interface CommonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
  external?: boolean;
}

interface ActionButtonProps extends CommonProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button(props: LinkButtonProps | ActionButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (props.href) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ActionButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
