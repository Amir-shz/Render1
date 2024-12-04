"use client";

import LegalPersonForm from "@/app/_components/LegalPersonForm";
import RealPersonForm from "@/app/_components/RealPersonForm";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";

export default function Page() {
  const [personType, setPersonType] = useState("real");

  return (
    <div className="flex bg-slate-800 w-screen h-dvh relative">
      <div className=" bg-slate-900  w-1/2 rounded-l-[36px] flex-1 size-full"></div>
      <div className="  flex  flex-1 size-full">
        <div className=" z-20 bg-slate-50 border border-slate-600/50 max-xl:w-1/2 max-md:w-2/3 max-sm:w-3/4  w-2/3 h-min absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl text-black flex flex-col gap-4 items-center justify-center px-8 max-sm:px-4 py-8 max-sm:py-6">
          <div className=" flex flex-col justify-center items-center size-full">
            <h2 className=" font-semibold text-xl max-sm:text-lg">ثبت نام</h2>

            <FormControl className=" my-4 translate-x-4 max-sm:my-2 ">
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={personType}
                onChange={(e) => setPersonType(e.target.value)}
              >
                <FormControlLabel
                  value="real"
                  control={<Radio />}
                  label="حقیقی"
                  className="[&>span]:font-iranSans"
                />
                <FormControlLabel
                  value="legal"
                  control={<Radio />}
                  label="حقوقی"
                  className="[&>span]:font-iranSans"
                />
              </RadioGroup>
            </FormControl>
            <div className=" w-full">
              {personType === "real" ? (
                <RealPersonForm personType={personType} />
              ) : (
                <LegalPersonForm personType={personType} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className=" absolute top-5 left-5 text-slate-100 bg-slate-600 p-2 rounded-full max-sm:top-3 max-sm:left-3"
      >
        <HiOutlineHome className=" size-10 max-sm:size-8" />
      </Link>
    </div>
  );
}
