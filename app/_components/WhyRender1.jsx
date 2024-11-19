import Image from "next/image";
import why1 from "@/public/why1.jpg";
import why2 from "@/public/why2.jpg";
import why3 from "@/public/why3.jpg";

function WhyRender1() {
  return (
    <div className=" bg-slate-900 -mx-4 py-16">
      <div className=" pb-12 grid grid-cols-2 mx-48 max-lg:grid-cols-1 max-lg:mx-24 max-md:mx-12 max-sm:mx-6">
        <div>
          <p className="animate__animated animate__fadeInRight  pb-4 text-primary font-bold text-xl">
            چرا Render1 ؟
          </p>
          <p className="animate__animated animate__fadeInLeft text-slate-300 font-bold text-justify leading-7">
            این مرکز با بیش از یک میلیون هسته گرافیکی، فضای ذخیره‌سازی پرسرعت، و
            بستری امن با دسترسی آسان، امکانات بی‌نظیری را ارائه می‌دهد. قابلیت
            سفارشی‌سازی بالا و پشتیبانی از نرم‌افزارهای پیشرفته، محیطی سازگار و
            بهینه برای کاربران فراهم می‌کند. همچنین سرعت بالا در حل مسائل پیچیده
            و رندرینگ پروژه‌ها، Render1 را به انتخابی ایده‌آل برای معماران و
            طراحان تبدیل کرده است که به دنبال کیفیت بالا، سرعت بی‌نظیر و اطمینان
            کامل هستند.
          </p>
        </div>
      </div>
      <div className=" animate__animated animate__fadeInRight grid grid-cols-3 gap-2 mx-48 max-lg:mx-24 max-md:mx-12 max-sm:grid-cols-1 max-sm:gap-4 max-sm:mx-6">
        <Image src={why1} alt="photo" className="max-sm:h-40 object-cover" />
        <Image src={why2} alt="photo" className="max-sm:h-40 object-cover" />
        <Image src={why3} alt="photo" className="max-sm:h-40 object-cover" />
      </div>
    </div>
  );
}

export default WhyRender1;
