function PriceCard({ num, title, cpu, ram, disk, gpu, price }) {
  return (
    <div className=" price__card hover:scale-95 transition-all duration-200 relative bg-slate-900 rounded shadow-slate-600 shadow">
      <p className="absolute top-6 left-6 text-5xl text-slate-600 ">{num}</p>
      <div className="h-96 max-md:h-48 max-lg:h-64 max-sm:h-20"></div>
      <p className=" text-white font-bold text-lg mr-6 max-lg:mr-2 max-lg:text-base ">
        {title}
      </p>
      <div className=" flex flex-col gap-6 text-left text-slate-300 font-medium p-4 pb-16">
        <p>CPU: {cpu} core</p>
        <p>RAM: {ram}GB</p>
        <p>Disk: {disk}</p>
        <p>GPU: {gpu}</p>
      </div>
      <p className=" bg-slate-900 text-center py-2 font-bold border-2 border-slate-500 rounded absolute bottom-0 w-full">
        قیمت: {price} تومان
      </p>
    </div>
  );
}

export default PriceCard;
