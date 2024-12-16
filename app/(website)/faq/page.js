import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "سوالات متداول",
};

const outerItemStyle =
  "bg-slate-50 transition-all duration-200 rounded-md px-4 [&_button]:hover:no-underline hover:bg-slate-100 [&_svg]:mr-2 [&_button]:text-right max-sm:px-3";
const innerItemStyle =
  "bg-slate-200 hover:bg-slate-300 duration-200 transition-all px-4 rounded-sm [&_svg]:mr-2 [&_button]:text-right max-sm:px-3";

function Page() {
  return (
    <>
      <h2 className="text-3xl pt-16 font-bold border-b pb-4 border-black max-sm:pt-8 max-sm:pb-2  ">
        سوالات متداول
      </h2>

      <div className="py-10 max-sm:py-5 text-justify">
        <Accordion
          type="single"
          collapsible
          className="max-w-screen-lg mx-auto space-y-2 rounded-md font-medium"
        >
          <AccordionItem value="item-1" className={outerItemStyle}>
            <AccordionTrigger>
              ۱- سوالات مربوط به ثبت‌نام و ایجاد اکانت
            </AccordionTrigger>
            <AccordionContent>
              <Accordion
                type="single"
                collapsible
                className=" max-w-screen-md mx-auto space-y-1"
              >
                <AccordionItem
                  value="item-1-nested-1"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    چگونه می‌توانم در سایت ثبت‌نام کنم؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    برای ثبت‌نام کافیست به صفحه‌ی
                    <span className="font-semibold text-primary text-lg">
                      {" "}
                      ثبت‌نام{" "}
                    </span>
                    بروید و فرم مربوطه را پر کنید. تنها اطلاعات ضروری شامل نام،
                    ایمیل معتبر و رمز عبور نیاز است. پس از تکمیل فرم، ایمیلی
                    حاوی لینک تایید برای شما ارسال می‌شود که باید آن را تایید
                    کنید.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-1-nested-2"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    اگر رمز عبورم را فراموش کنم، چه کاری باید انجام دهم؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    در صفحه ورود، روی گزینه
                    <span className="font-semibold text-primary text-lg">
                      {" "}
                      رمز عبور را فراموش کرده‌ام{" "}
                    </span>
                    کلیک کنید. ایمیلی با لینک بازیابی رمز عبور برای شما ارسال
                    می‌شود. از طریق این لینک می‌توانید رمز عبور جدید تنظیم کنید
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className={outerItemStyle}>
            <AccordionTrigger>
              ۲- سوالات مربوط به اجاره و استفاده از سیستم‌ها
            </AccordionTrigger>
            <AccordionContent>
              <Accordion
                type="single"
                collapsible
                className=" max-w-screen-md mx-auto space-y-1 "
              >
                <AccordionItem
                  value="item-2-nested-1"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    چطور می‌توانم یک سیستم اجاره کنم؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    پس از ورود به حساب کاربری، به بخش
                    <span className="font-semibold text-primary text-lg">
                      {" "}
                      انتخاب سیستم{" "}
                    </span>
                    بروید. در این بخش می‌توانید مشخصات سیستم‌های موجود را بررسی
                    کرده و براساس نیاز خود، سیستم مورد نظر را انتخاب کنید. سپس
                    مراحل پرداخت را انجام دهید تا دسترسی شما فعال شود.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2-nested-2"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    آیا امکان انتخاب سیستم با مشخصات خاص وجود دارد؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    بله، ما سرورهایی با مشخصات متنوع (شامل پردازنده، کارت
                    گرافیک، حافظه و غیره) ارائه می‌دهیم. می‌توانید در بخش
                    <span className="font-semibold text-primary text-lg">
                      {" "}
                      انتخاب سیستم{" "}
                    </span>
                    ، سروری با مشخصات مورد نیاز خود را انتخاب کنید.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className={outerItemStyle}>
            <AccordionTrigger>
              ۳- سوالات مربوط به اتصال و استفاده
            </AccordionTrigger>
            <AccordionContent>
              <Accordion
                type="single"
                collapsible
                className=" max-w-screen-md mx-auto space-y-1"
              >
                <AccordionItem
                  value="item-3-nested-1"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>چطور به سرور متصل شوم؟</AccordionTrigger>
                  <AccordionContent className="leading-7">
                    پس از اجاره سیستم، اطلاعات اتصال شامل آدرس IP و نام کاربری
                    برای شما ارسال می‌شود. کافیست با استفاده از نرم‌افزارهای
                    ریموت دسکتاپ (مانند Remote Desktop Connection یا AnyDesk) به
                    سرور متصل شوید.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3-nested-2"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    آیا آموزش یا راهنمایی برای اتصال و کار با سرورها وجود دارد؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    بله، ما ویدیوهای آموزشی و راهنمای متنی برای اتصال و استفاده
                    از سرورها آماده کرده‌ایم. این راهنماها در بخش
                    <span className="font-semibold text-primary text-lg">
                      {" "}
                      آموزش{" "}
                    </span>
                    سایت در دسترس شما قرار دارند.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className={outerItemStyle}>
            <AccordionTrigger>۴- سوالات مربوط به رندرگیری</AccordionTrigger>
            <AccordionContent>
              <Accordion
                type="single"
                collapsible
                className=" max-w-screen-md mx-auto space-y-1"
              >
                <AccordionItem
                  value="item-4-nested-1"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    چه نوع پروژه‌هایی را می‌توانم رندر بگیرم؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    سرورهای ما برای رندرگیری پروژه‌های سه‌بعدی، انیمیشن، معماری،
                    طراحی صنعتی و هر نوع پروژه‌ای که نیاز به قدرت پردازشی بالا
                    دارد مناسب هستند. از نرم‌افزارهایی مانند 3ds Max، Blender،
                    Maya و غیره پشتیبانی می‌کنیم.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4-nested-2"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    آیا پروژه‌های من روی سرورها امن هستند؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    بله، تمامی سرورها از پروتکل‌های امنیتی پیشرفته استفاده
                    می‌کنند و اطلاعات شما کاملاً محافظت می‌شوند. همچنین
                    می‌توانید پس از پایان کار، داده‌های خود را حذف کنید.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className={outerItemStyle}>
            <AccordionTrigger>
              ۵- سوالات مربوط به هزینه و پرداخت
            </AccordionTrigger>
            <AccordionContent>
              <Accordion
                type="single"
                collapsible
                className=" max-w-screen-md mx-auto space-y-1"
              >
                <AccordionItem
                  value="item-5-nested-1"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    هزینه‌ی اجاره سرورها چقدر است؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    هزینه‌ها بسته به مشخصات سرور و مدت زمان اجاره متفاوت است.
                    لیست قیمت‌ها در بخش
                    <span className="font-semibold text-primary text-lg">
                      {" "}
                      تعرفه ها{" "}
                    </span>
                    سایت به صورت کامل قابل مشاهده است. همچنین برای استفاده‌های
                    طولانی‌مدت تخفیف‌های ویژه‌ای ارائه می‌دهیم.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5-nested-2"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    آیا امکان استرداد مبلغ وجود دارد؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    بله، در صورتی که مشکل یا نارضایتی از خدمات ما داشتید،
                    می‌توانید درخواست بازپرداخت دهید. شرایط استرداد در بخش
                    <span className="font-semibold text-primary text-lg">
                      {" "}
                      قوانین و مقررات{" "}
                    </span>
                    توضیح داده شده است.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className={outerItemStyle}>
            <AccordionTrigger>
              ۶- سوالات مربوط به پشتیبانی و خدمات پس از فروش
            </AccordionTrigger>
            <AccordionContent>
              <Accordion
                type="single"
                collapsible
                className=" max-w-screen-md mx-auto space-y-1"
              >
                <AccordionItem
                  value="item-6-nested-1"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    اگر با مشکلی مواجه شدم، چطور می‌توانم با پشتیبانی تماس
                    بگیرم؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    شما می‌توانید از طریق بخش
                    <span className="font-semibold text-primary text-lg">
                      {" "}
                      پشتیبانی{" "}
                    </span>
                    در سایت، تیکت ثبت کنید یا با شماره تماس و ایمیل ما در ارتباط
                    باشید. تیم پشتیبانی ما ۲۴/۷ آماده پاسخگویی به شماست.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-6-nested-2"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    آیا پشتیبانی ۲۴/۷ ارائه می‌دهید؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    بله، تیم پشتیبانی ما به صورت ۲۴ ساعته در تمامی روزهای هفته
                    آماده‌ی کمک به شماست.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className={outerItemStyle}>
            <AccordionTrigger>
              ۷- سوالات مربوط به امنیت و حریم خصوصی
            </AccordionTrigger>
            <AccordionContent>
              <Accordion
                type="single"
                collapsible
                className=" max-w-screen-md mx-auto space-y-1"
              >
                <AccordionItem
                  value="item-7-nested-1"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    آیا اطلاعات و پروژه‌های من روی سرورها امن هستند؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    بله، ما از رمزنگاری پیشرفته و فایروال‌های قوی برای حفاظت از
                    اطلاعات شما استفاده می‌کنیم. علاوه بر این، هیچ‌گونه دسترسی
                    غیرمجاز به پروژه‌های شما وجود نخواهد داشت.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-7-nested-2"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    چگونه از امنیت اتصال من به سرورها اطمینان حاصل کنم؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    تمامی ارتباطات بین دستگاه شما و سرورهای ما از طریق
                    پروتکل‌های امن رمزنگاری‌شده انجام می‌شود. همچنین می‌توانید
                    از VPN برای افزایش امنیت اتصال خود استفاده کنید.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8" className={outerItemStyle}>
            <AccordionTrigger>۸- سوالات عمومی</AccordionTrigger>
            <AccordionContent>
              <Accordion
                type="single"
                collapsible
                className=" max-w-screen-md mx-auto space-y-1"
              >
                <AccordionItem
                  value="item-8-nested-1"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    چه تفاوتی بین سرویس شما و دیگر خدمات مشابه وجود دارد؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    ما بهترین سخت‌افزارهای روز، تعرفه‌های رقابتی و پشتیبانی ۲۴/۷
                    را ارائه می‌دهیم. همچنین رابط کاربری ساده و قابلیت
                    سفارشی‌سازی خدمات از دیگر مزایای ماست.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-8-nested-2"
                  className={innerItemStyle}
                >
                  <AccordionTrigger>
                    آیا می‌توانم از چند سیستم به صورت همزمان استفاده کنم؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    بله، شما می‌توانید همزمان چندین سرور اجاره کنید و از آن‌ها
                    برای پروژه‌های مختلف استفاده کنید.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default Page;
