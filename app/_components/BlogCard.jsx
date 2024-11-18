import Image from "next/image";
import Link from "next/link";

function BlogCard({ blogData }) {
  const {
    id,
    title,
    text: { firstText },
    time,
    category,
    image,
  } = blogData;

  return (
    <div className=" bg-slate-200 shadow-lg w-full flex flex-col border border-gray-600/30 rounded-md py-6 px-8">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className=" self-center"
      />
      <div className="flex gap-2 items-center">
        <p className=" text-blue-900 font-semibold text-sm">{category}</p>
        <p className=" text-gray-400">{time}</p>
      </div>
      <p className="py-4 font-semibold">{title}</p>
      <p className=" line-clamp-2">{firstText}</p>
      <Link
        href={`/blog/${id}`}
        className="bg-slate-300 w-1/2 self-center text-center rounded border border-slate-400 shadow mt-4 py-2 font-semibold hover:shadow-lg transition-all duration-300 hover:bg-slate-500 hover:text-slate-100"
      >
        مشاهده بیشتر
      </Link>
    </div>
  );
}

export default BlogCard;
