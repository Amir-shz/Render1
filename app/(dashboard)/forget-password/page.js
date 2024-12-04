import AuthForm from "@/app/_components/AuthForm";
import AuthInput from "@/app/_components/AuthInput";
import { handleForgetPassword } from "@/app/_lib/actions";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <AuthForm action={handleForgetPassword}>
      <h2 className=" font-semibold text-xl">تغییر رمزعبور</h2>
      <p className=" text-xs text-center">
        ایمیل و یا شماره تماسی که برای ثبت نام استفاده کرده اید را وارد کنید تا
        کد تغییر پسورد برای شما ارسال شود.
      </p>
      <div className=" items-center grid grid-cols-[2fr_4fr] gap-4 w-full mt-4 max-sm:grid-cols-1 max-sm:gap-1">
        <AuthInput
          name="emailORphone"
          type="text"
          label="ایمیل یا شماره تماس"
        />
      </div>

      <Button
        fullWidth
        variant="contained"
        type="submit"
        className=" font-iranSans"
      >
        ارسال کد
      </Button>
      <div className=" flex gap-1 w-full">
        <Link
          href="/login"
          className=" w-full flex justify-center bg-slate-200 rounded-sm p-1 hover:bg-blue-100"
        >
          ورود
        </Link>

        <Link
          href="/signup"
          className=" w-full flex justify-center bg-slate-200 rounded-sm p-1 hover:bg-blue-100"
        >
          ثبت نام
        </Link>
      </div>
    </AuthForm>
  );
}
