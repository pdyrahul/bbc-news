import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavList({ className, data, variant = "main" }) {
  const pathname = usePathname();

  const getLinkClass = (isActive) => {
    const baseClass = "nav-link text-dark fw-semibold fs-14";
    const activeClass = variant === "main"
      ? (isActive ? "border-bottom border-danger border-2" : "")
      : (isActive ? "border-start border-danger border-3 ps-2" : "");
    const variantClass = variant === "main" ? "nav-hover:hover" : "py-2 nav-hover:hover";

    return `${baseClass} ${variantClass} ${activeClass}`;
  };

  return (
    <ul className={className}>
      {data?.map((item, i) => {
        const isActive = pathname === item.url;

        return (
          <li key={i} className={variant === "main" ? "nav-item" : ""}>
            <Link
              className={getLinkClass(isActive)}
              href={item.url}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}