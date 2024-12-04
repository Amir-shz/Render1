function AuthForm({ children, action }) {
  return (
    <div className="flex bg-slate-800 w-screen h-screen relative">
      <div className=" bg-slate-900  w-1/2 rounded-l-[36px] flex-1 size-full"></div>
      <div className="  flex  flex-1 size-full">
        <form
          action={action}
          className=" z-20 bg-slate-50 border border-slate-600/50 max-xl:w-1/2 max-md:w-2/3 max-sm:w-3/4  w-1/3 h-2/3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl text-black flex flex-col gap-4 items-center justify-center px-8 max-sm:px-4"
        >
          {children}
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
