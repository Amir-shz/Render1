import AuthForm from "@/app/_components/AuthForm";
// import AuthInput from "@/app/_components/AuthInput";
import { handleSignUp } from "@/app/_lib/actions";
// import { Button } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <AuthForm action={handleSignUp}>
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
    </AuthForm>
  );
}
