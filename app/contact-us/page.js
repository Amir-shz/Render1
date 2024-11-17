import { HiMiniPhone } from "react-icons/hi2";
import { HiMiniEnvelope } from "react-icons/hi2";
import { HiMapPin } from "react-icons/hi2";

export const metadata = {
  title: "تماس با ما",
};

export default function page() {
  return (
    <>
      <h2 className=" text-3xl pt-16 font-bold border-b pb-4 border-black ">
        تماس با ما
      </h2>
      <div className="py-10 space-y-4 font-medium text-lg [&>div]:flex [&>div]:items-center [&>div]:gap-6 [&_svg]:size-8 [&_svg]:text-primary mx-32">
        <div>
          <HiMiniPhone />
          <p>۰۳۱۳۳۹۳۲۰۲۰ - ۰۳۱۳۳۹۳۲۴۲۴</p>
        </div>
        <div>
          <HiMiniEnvelope />
          <p>info@render1.ir</p>
        </div>
        <div>
          <HiMapPin />
          <p>
            اصفهان، شهرک علمی و تحقیقاتی اصفهان، ساختمان فن آفرینی ۲، واحد ۳۴۵
          </p>
        </div>
      </div>
      <div className="mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6713.750837855869!2d51.511922!3d32.715938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbdcd5dd680a9d9%3A0xfb22e38b8fd1d48f!2sPG86%2B9QF%2C%20Khomeyni%20Shahr%2C%20Isfahan%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1731853323603!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
