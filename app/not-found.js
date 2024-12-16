import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" h-dvh w-screen flex justify-center items-center">
      <div className=" flex flex-col items-center justify-center">
        <h2 className=" text-slate-700 font-semibold text-3xl text-center">
          صفحه موردنظر یافت نشد
        </h2>
        <Link
          href="/"
          className=" text-center inline-block mt-6 py-4 px-8 bg-slate-600 text-xl rounded-md text-white"
        >
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
