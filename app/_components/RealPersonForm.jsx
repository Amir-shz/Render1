"use client";
import { Button } from "@mui/material";
import AuthInput from "./AuthInput";
import { handleSignUp } from "../_lib/actions";
import Link from "next/link";

function RealPersonForm({ personType }) {
  return (
    <form action={handleSignUp} className=" flex flex-col gap-2 max-sm:gap-1">
      <input type="hidden" name="personType" value={personType} />
      <div className=" grid grid-cols-2 gap-2">
        <div>
          <AuthInput name="firstname" type="text" label="نام" />
        </div>
        <div>
          <AuthInput name="lastname" type="text" label="نام خانوادگی" />
        </div>
        <div>
          <AuthInput name="nationalCode" type="number" label="کدملی" />
        </div>
        <div>
          <AuthInput name="email" type="email" label="ایمیل" />
        </div>
      </div>
      <div className="mt-1 ">
        <div className="mb-1">
          <AuthInput
            name="phone"
            type="number"
            label="شماره موبایل (نیاز به تایید)"
          />
        </div>
        <AuthInput name="password" type="password" label="رمزعبور" />
      </div>

      <Button
        fullWidth
        variant="contained"
        type="submit"
        className=" font-iranSans mt-4"
      >
        ثبت نام
      </Button>
      <div className=" flex items-center gap-4 self-start mt-4">
        <p>حساب کاربری دارید؟</p>
        <Link href="login" className="text-sm text-blue-800 font-medium">
          ورود
        </Link>
      </div>
    </form>
  );
}

export default RealPersonForm;
