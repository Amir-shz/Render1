import Avatar from "@/app/_components/Avatar";
import CommentForm from "@/app/_components/CommentForm";
import MiniBlogCard from "@/app/_components/MiniBlogCard";
import { data } from "@/app/_data/blogData";
import Image from "next/image";
import Link from "next/link";
import { HiUser } from "react-icons/hi2";
import { HiMiniBookOpen } from "react-icons/hi2";

export async function generateMetadata({ params }) {
  const { blogId } = await params;
  const { title } = data.filter((item) => item.id === +blogId)[0];
  return {
    title: `${title}`,
  };
}

export default async function page({ params }) {
  const { blogId } = await params;
  const { title, text, image, category, author, app, avatar } = data.filter(
    (item) => item.id === +blogId
  )[0];
  const { mainTitle, firstText, textItems } = text;

  const sameBlogs = data
    .filter((item) => item.category === category)
    .filter((item) => item.id !== +blogId);

  return (
    <div className="my-4 mx-auto max-w-5xl">
      <div className=" shadow-md flex flex-col border-2 rounded-md py-14 px-12  bg-white">
        <p className=" text-4xl font-semibold pb-6">{title}</p>
        <div className=" pb-8 [&_p]:text-slate-600 [&_svg]:text-slate-600 [&_p]:text-sm flex gap-4">
          <div className="flex gap-1 items-center">
            <HiUser />
            <p>{author}</p>
          </div>
          <div className="flex gap-2 items-center">
            <HiMiniBookOpen />
            <p>{category}</p>
          </div>
        </div>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className=" self-center w-3/5 pb-8"
        />
        <div className="text-justify ">
          <h2 className="font-semibold text-3xl pb-4">{mainTitle}</h2>
          <p className="text-slate-600 leading-7">{firstText}</p>
          {textItems.map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl font-semibold pb-4 pt-6">{item.title}</h3>
              {item.text && (
                <p className="text-slate-600 leading-7 whitespace-pre-line">
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center pt-8 gap-8">
          <p className="font-semibold text-xl ">
            برای دانلود نرم افزار {app} میتوانید روی لینک زیر کلیک کنید.
          </p>
          <Link
            href="/"
            className="font-medium bg-slate-200 py-2 px-8 rounded-xl hover:bg-slate-500 hover:text-slate-100 transition-all duration-200 shadow-sm"
          >
            دریافت
          </Link>
        </div>
        <div className=" flex gap-4 items-center mt-4">
          <Avatar img={avatar} />
          <p>
            <span className="font-semibold text-xl">نویسنده:</span>
            <span className="font-light"> {author} </span>
          </p>
        </div>
      </div>
      <div>
        <p className="pb-4 pt-8 pr-8 text-lg font-semibold border-b-2 border-black ">
          مطالب مشابه
        </p>
        <div className="grid grid-cols-4 gap-2 py-4">
          {sameBlogs.map((blog) => (
            <MiniBlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <CommentForm />
    </div>
  );
}
