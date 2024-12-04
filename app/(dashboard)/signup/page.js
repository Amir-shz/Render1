"use client";
import AuthForm from "@/app/_components/AuthForm";
import LegalPersonForm from "@/app/_components/LegalPersonForm";
import RealPersonForm from "@/app/_components/RealPersonForm";
import { handleSignUp } from "@/app/_lib/actions";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";

export default function Page() {
  const [personType, setPersonType] = useState("real");
  useEffect(() => {
    console.log(personType);
  }, [personType]);

  return (
    <div className="flex bg-slate-800 w-screen h-dvh relative">
      <div className=" bg-slate-900  w-1/2 rounded-l-[36px] flex-1 size-full"></div>
      <div className="  flex  flex-1 size-full">
        <form className=" z-20 bg-slate-50 border border-slate-600/50 max-xl:w-1/2 max-md:w-2/3 max-sm:w-3/4  w-1/3 h-min absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl text-black flex flex-col gap-4 items-center justify-center px-8 max-sm:px-4 py-8">
          <div className=" flex flex-col justify-center items-center size-full">
            <h2 className=" font-semibold text-xl">ثبت نام</h2>

            <FormControl className=" my-4 self-start ">
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
            <div>
              {personType === "real" ? <RealPersonForm /> : <LegalPersonForm />}
            </div>
          </div>
        </form>
      </div>
      <Link
        href="/"
        className=" absolute top-5 left-5 text-slate-100 bg-slate-600 p-2 rounded-full max-sm:top-3 max-sm:left-3"
      >
        <HiOutlineHome className=" size-10" />
      </Link>
    </div>
  );
}
