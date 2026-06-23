import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "inverse" | "outline-light";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm tracking-wide transition-colors duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

/**
 * primary/outline/ghost are for light (ivory) backgrounds. inverse/outline-light
 * are for dark or photo backgrounds (e.g. the hero) where the default variants
 * would lack contrast.
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-charcoal text-ivory hover:bg-gold-strong",
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
