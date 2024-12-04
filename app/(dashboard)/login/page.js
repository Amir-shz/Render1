import AuthForm from "@/app/_components/AuthForm";
import AuthInput from "@/app/_components/AuthInput";
import { handleSignIn } from "@/app/_lib/actions";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <AuthForm action={handleSignIn}>
      <h2 className=" font-semibold text-xl">ورود به حساب کاربری</h2>
      <div className=" grid grid-cols-[1fr_5fr] gap-4 w-full mt-6 max-sm:grid-cols-1 max-sm:gap-1">
        <AuthInput name="email" type="email" label="ایمیل" />
        <AuthInput name="password" type="password" label="رمزعبور" />
      </div>
      <Link
        href="/forget-password"
        className=" self-start text-sm text-blue-800 font-medium mb-4"
      >
        رمزعبور خود را فراموش کردید؟
      </Link>
      <Button
        fullWidth
        variant="contained"
        type="submit"
        className=" font-iranSans"
      >
        ورود
      </Button>
      <div className=" flex items-center gap-4 self-start mt-4">
        <p>حساب کاربری ندارید؟</p>
        <Link href="signup" className="text-sm text-blue-800 font-medium">
          ثبت نام
        </Link>
      </div>
    </AuthForm>
  );
}
