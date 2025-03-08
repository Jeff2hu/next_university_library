import { cn } from "@/lib/utils";
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
      <div className="my-10 flex justify-between gap-5">
        <Link href="/">BookWise</Link>

        <ul className="flex flex-row items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn("text-base cursor-pointer capitalize", {
                  "text-primary": pathname === link.href,
                })}
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
