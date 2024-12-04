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

      <AuthInput
        name="phone"
        type="number"
        label="شماره موبایل (نیاز به تایید)"
      />
      <AuthInput name="password" type="password" label="رمزعبور" />

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
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint
        perferendis alias ipsum vitae delectus et, accusamus aliquam iste
        asperiores tempore quis earum similique unde reprehenderit enim eos
        aspernatur inventore. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Earum, iste! Laboriosam, ipsum! Consequuntur eum doloribus
        corporis, beatae dolor dicta. Quae saepe a id dignissimos odit iusto
        tempora sapiente est consequatur. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Autem, temporibus! Voluptatum nihil
        blanditiis quasi excepturi numquam! Soluta assumenda fuga beatae sit,
        odio dignissimos quisquam est non dolore laudantium minus animi. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt
        repellendus itaque distinctio velit reiciendis ducimus cumque porro
        quidem? Praesentium sapiente delectus et magni corporis, enim est!
        Alias, libero dolores!
      </p> */}
    </form>
  );
}

export default RealPersonForm;
