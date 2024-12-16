import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBarItem({ href, onClose, children }) {
  const pathName = usePathname();

  return (
    <Link href={href} onClick={() => onClose()}>
      <li className={`${pathName === href ? " bg-slate-700" : "bg-slate-800"}`}>
        {children}
      </li>
    </Link>
  );
}

export default SideBarItem;
