import { handleTicket } from "@/app/_lib/actions";
import { Button } from "@mui/material";

function Page() {
  return (
    <div>
      <h2 className=" border-b border-slate-400/50 pb-4 text-2xl text-slate-700 font-semibold m-4 max-sm:m-0 max-sm:mt-1 max-sm:mb-4  ">
        پشتیبانی
      </h2>
      <div className="bg-slate-200 mx-4 rounded shadow-md shadow-slate-500/25 p-3  max-lg:p-2 max-sm:mx-0 ">
        <div className="bg-slate-100 rounded-sm p-4 shadow pb-2 max-sm:p-2">
          <p className=" text-slate-800 font-semibold">ایجاد تیکت پشتیبانی</p>
          <form
            action={handleTicket}
            className="my-2 space-y-2  max-[345px]:space-y-4 "
          >
            <div className="grid grid-cols-2 items-center gap-2 max-lg:grid-cols-1 max-[345px]:[&>div]:grid-cols-1  max-[345px]:gap-4  max-[345px]:[&>div]:gap-1">
              <div className="grid grid-cols-[1fr_5fr] max-xl:grid-cols-[1fr_4fr] max-sm:grid-cols-[1fr_3fr] items-center gap-2">
                <label htmlFor="ticketSubject" className=" max-sm:text-sm">
                  موضوع
                </label>
                <input
                  required
                  name="ticketSubject"
                  id="ticketSubject"
                  type="text"
                  placeholder="موضوع تیکت را وارد کنید"
                  className="py-2 px-4 focus:outline-none focus:border disabled:bg-slate-200 focus:border-slate-400 rounded-sm placeholder:text-slate-600 max-sm:placeholder:text-sm max-sm:px-2"
                />
              </div>
              <div className="grid grid-cols-[1fr_5fr] max-xl:grid-cols-[1fr_4fr] max-sm:grid-cols-[1fr_3fr] items-center gap-2">
                <label htmlFor="ticketType" className=" max-sm:text-sm">
                  بخش
                </label>
                <select
                  required
                  name="ticketType"
                  id="ticketType"
                  className="py-2 px-4 focus:outline-none focus:border disabled:bg-slate-200 focus:border-slate-400 rounded-sm placeholder:text-slate-600 max-sm:placeholder:text-sm max-sm:px-2 max-sm:text-sm"
                >
                  <option value="" hidden>
                    بخش مورد نظر را انتخاب کنید
                  </option>
                  <option value="Technical">فنی</option>
                  <option value="Financial">مالی</option>
                  <option value="Support">پشتیبانی</option>
                </select>
              </div>
              <div className="grid grid-cols-[1fr_5fr] max-xl:grid-cols-[1fr_4fr] max-sm:grid-cols-[1fr_3fr] items-center gap-2">
                <label htmlFor="serviceCode" className=" max-sm:text-sm">
                  کد سرویس{" "}
                  <span className=" text-[10px] block">(در صورت وجود)</span>
                </label>
                <input
                  name="serviceCode"
                  id="serviceCode"
                  type="text"
                  placeholder="کد سرویس: ۱۱۱۱"
                  className="py-2 px-4 focus:outline-none focus:border disabled:bg-slate-200 focus:border-slate-400 rounded-sm placeholder:text-slate-600 max-sm:placeholder:text-sm max-sm:px-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-[1fr_11fr] max-xl:grid-cols-[1fr_9fr] max-lg:grid-cols-[1fr_4fr] items-center gap-[7px] max-sm:grid-cols-[1fr_3fr] max-sm:gap-2  max-[345px]:grid-cols-1">
              <label htmlFor="ticketText" className=" max-sm:text-sm">
                درخواست
              </label>
              <textarea
                required
                name="ticketText"
                id="ticketText"
                className=" resize-none h-28 py-2 px-4 focus:outline-none focus:border disabled:bg-slate-200 focus:border-slate-400 rounded-sm placeholder:text-slate-600 max-sm:placeholder:text-sm max-sm:px-2"
              />
            </div>
            <div className=" flex justify-center items-center">
              <Button
                fullWidth
                variant="contained"
                type="submit"
                className=" font-iranSans mt-4 w-1/2 max-sm:mt-2"
              >
                ثبت
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
