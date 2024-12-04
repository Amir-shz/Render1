import BlogCard from "../../_components/BlogCard";
import { data } from "@/app/_data/blogData";

export const metadata = {
  title: "پایگاه دانش",
};

export default function page() {
  return (
    <>
      <h2 className=" max-sm:pt-8 max-sm:pb-2 text-3xl pt-16 font-bold border-b pb-4 border-black ">
        پایگاه دانش
      </h2>
      <div className=" max-sm:py-5 py-10 grid grid-cols-2 gap-4 mx-2 max-md:grid-cols-1">
        {data.map((blogData) => (
          <BlogCard key={blogData.id} blogData={blogData} />
        ))}
      </div>
    </>
  );
}
