"use client";

import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import SideBar from "./SideBar";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden px-6">
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <HiBars3 className="size-8" />
      </button>
      <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default Menu;
