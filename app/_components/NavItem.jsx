import Link from "next/link";

function NavItem({ children, referenceTo }) {
  return (
    <li className="border-l last:border-none px-3 border-white hover:text-primary transition-all duration-200">
      <Link href={referenceTo}>{children}</Link>
    </li>
  );
}

export default NavItem;
