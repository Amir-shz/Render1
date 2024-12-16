"use client";

import { createPortal } from "react-dom";
import useOutsideClick from "../_hooks/useOutsideClick";
import { useEffect, useRef, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { navItems } from "../_lib/utils";
import SideBarItem from "./SideBarItem";

function SideBar({ isOpen, onClose }) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, onClose);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // مطمئن می‌شویم که فقط در کلاینت اجرا می‌شود
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={` z-40 fixed top-0 right-0  ${
        isOpen
          ? " backdrop-blur-sm h-screen w-screen"
          : " backdrop-blur-0 h-0 w-0"
      }  `}
    >
      <button
        onClick={onClose}
        className={` absolute top-4 left-0 transition-all duration-300 bg-slate-300 rounded-full ${
          isOpen ? "translate-x-8" : "hidden"
        } `}
      >
        <HiMiniXMark size={32} />
      </button>
      <div
        ref={modalRef}
        className={`z-50 fixed top-0 transition-all duration-300 right-0 w-8/12 h-screen bg-slate-900 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } text-white [&_li]:py-2 mt-2 [&_li]:px-4 [&_li]:mx-1 [&_li]:my-1 [&_li]:rounded-md [&_li]:border [&_li]:border-slate-600`}
        >
          {navItems.map((item) => (
            <SideBarItem key={item.id} href={item.reference} onClose={onClose}>
              {item.name}
            </SideBarItem>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
}

export default SideBar;
