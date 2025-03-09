"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Library",
    href: "/library",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="flex justify-between gap-5 my-10">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        </Link>

        <ul className="flex flex-row items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-base cursor-pointer capitalize",
                  pathname === link.href ? "text-light-200" : "text-light-100"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
