"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function MainNavBtn({ href, icon, children }) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={` w-full flex items-center py-2 pr-3 rounded-md gap-4 [&>svg]:size-6 [&>svg]:text-black text-black font-semibold text-lg  shadow-sm transition-all duration-200 ${
        pathName === href ? "bg-gray-500 text-gray-50" : "bg-gray-100"
      } `}
    >
      {icon}
      {children}
    </Link>
  );
}

export default MainNavBtn;
