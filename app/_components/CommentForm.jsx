import { handleComment } from "../_lib/actions";

function CommentForm() {
  return (
    <form
      action={handleComment}
      className="shadow-md border-2 rounded-md pt-14 pb-7  px-12 bg-white"
    >
      <p className=" text-lg border-b border-b-slate-300 pb-4 font-semibold ">
        دیدگاهتان را بنویسید
        <span className="font-normal text-sm inline-block px-1">
          (نشانی ایمیل شما منتشر نخواهد شد)
        </span>
      </p>
      <label className="block pt-4 pb-2" htmlFor="comment">
        دیدگاه
      </label>
      <textarea
        required
        name="comment"
        id="comment"
        className="w-full min-h-48 bg-slate-50 shadow-sm border p-2 border-slate-400 rounded-md"
      ></textarea>
      <div>
        <label className="block pt-4 pb-2" htmlFor="name">
          نام
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="bg-slate-50 shadow-sm border p-2 border-slate-400 rounded-md w-1/2"
        />
        <label className="block pt-4 pb-2" htmlFor="email">
          ایمیل
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          className="bg-slate-50 shadow-sm border p-2 border-slate-400 rounded-md w-1/2"
        />
        <label className="block pt-4 pb-2" htmlFor="site">
          وبسایت
        </label>
        <input
          type="text"
          name="site"
          id="site"
          className="bg-slate-50 shadow-sm border p-2 border-slate-400 rounded-md w-1/2"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-slate-200 w-3/4 text-center rounded mt-11 border border-slate-500 shadow-md py-3 font-semibold hover:shadow-lg transition-all duration-300 hover:bg-slate-500 hover:text-slate-100"
        >
          فرستادن دیدگاه
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
