"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "@/components/main-header/main-header.module.scss";

export default function NavLink({ href, style, children }) {
  const path = usePathname();
  return (
    <>
      <Link
        className={
          path.startsWith(href)
            ? `${classes.active} text-decoration-none ${style} `
            : `text-decoration-none ${style}`
        }
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
