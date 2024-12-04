"use client";

import {
  HiBars3,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCircleStack,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";
import { useState } from "react";

import { Drawer } from "@mui/material";

import MainNavBtn from "./MainNavBtn";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" md:hidden flex items-center hover:bg-slate-300 transition-all duration-200 bg-slate-200 [&_svg]  rounded-full">
      <button onClick={() => setIsOpen((isOpen) => !isOpen)} className="p-2">
        <HiBars3 className="size-8" />
      </button>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onClick={() => setIsOpen(false)}
        anchor="top"
      >
        <div className=" px-4 py-2 space-y-2 bg-slate-700">
          <MainNavBtn href="/dashboard" icon={<HiOutlineHome />}>
            خانه
          </MainNavBtn>
          <MainNavBtn href="/dashboard/profile" icon={<HiOutlineUser />}>
            حساب کاربری
          </MainNavBtn>
          <MainNavBtn
            href="/dashboard/services"
            icon={<HiOutlineCircleStack />}
          >
            سرویس ها
          </MainNavBtn>
          <MainNavBtn
            href="/dashboard/invoices"
            icon={<HiOutlineDocumentText />}
          >
            فاکتور ها
          </MainNavBtn>
          <MainNavBtn
            href="/dashboard/support"
            icon={<HiOutlineChatBubbleLeftEllipsis />}
          >
            پشتیبانی
          </MainNavBtn>
        </div>
      </Drawer>
    </div>
  );
}

export default Menu;
