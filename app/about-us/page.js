import AboutRow from "@/app/_components/AboutRow";

import about1 from "@/public/about-1.png";
import about2 from "@/public/about-2.jpg";
import about3 from "@/public/about-3.jpg";

export const metadata = {
  title: "درباره ما",
};

export default function page() {
  return (
    <>
      <h2 className=" text-3xl pt-16 font-bold border-b pb-4 border-black max-sm:pt-8 max-sm:pb-2  ">
        درباره ما
      </h2>

      <div className="py-10 max-sm:py-5">
        <AboutRow
          photoSRC={about1}
          alt="a picture"
          text="مجموعه Render1 با هدف ارائه سرورهای اختصاصی و با سرعت بالا برای رندرینگ معماری و سایر حوزه ها، در شهرک علمی و فناوری اصفهان تاسیس شده است. این مجموعه با بهره‌گیری از جدیدترین و به‌روزترین سخت‌افزارها، به عنوان ارائه‌دهنده تخصصی سرورهای مجازی، سرورهای ابری و سرورهای گرافیکی مبتنی بر شتاب‌دهنده‌های گرافیکی در ایران فعالیت می‌کند."
        />
        <AboutRow
          photoSRC={about2}
          alt="a picture"
          text="Render1 همکاری مشترک شرکت آسا مهراز آریسا و مرکز پردازش سریع خیام است. از جمله امکانات این مرکز می‌توان به بیش از یک میلیون هسته گرافیکی، فضای ذخیره‌سازی بسیار سریع، بستری امن با دسترسی آسان، امکان سفارشی‌سازی، پشتیبانی از نرم‌افزارهای پیشرفته و سرعت بالا در حل مسائل اشاره کرد."
          isReverse
        />
        <AboutRow
          photoSRC={about3}
          alt="a picture"
          text="Render1 به عنوان پیشرو در زمینه ارائه سرورهای گرافیکی مبتنی بر شتاب‌دهنده‌های گرافیکی، توانایی اجرای محاسبات پردازشی سریع و با کیفیت بالا را به مشتریان خود ارائه می‌دهد. هدف ما ارائه راهکارهای نوآورانه و کارآمد برای تسهیل و تسریع فرآیندهای رندرینگ، افزایش بهره‌وری و بهبود تجربه کاربری است. با تمرکز بر رضایت مشتریان و ارتقاء مداوم خدمات، Render1 همواره در تلاش است تا بهترین راه‌حل‌ها را در اختیار کاربران خود قرار دهد."
        />
      </div>
    </>
  );
}
