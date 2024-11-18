import Image from "next/image";
import Link from "next/link";

function MiniBlogCard({ blog }) {
  const { id, title, image } = blog;
  return (
    <Link href={`/blog/${id}`}>
      <div className="hover:scale-[101%] transition-all duration-200 relative bg-slate-100 p-4 text-center rounded-md shadow-sm border border-slate-300">
        <p className=" font-semibold pb-2 max-sm:font-medium max-sm:text-sm">
          {title}
        </p>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="object-cover w-full rounded-sm"
        />
      </div>
    </Link>
  );
}

export default MiniBlogCard;
