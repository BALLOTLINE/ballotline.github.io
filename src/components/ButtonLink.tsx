import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<"a"> & { href: string };

export default function ButtonLink({ className = "", children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center bg-brand-blue px-5 py-2.5 text-base font-semibold text-white no-underline transition-colors hover:bg-brand-red hover:text-white ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
