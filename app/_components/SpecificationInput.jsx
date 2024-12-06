function SpecificationInput({ label, type, placeholder = "", id }) {
  return (
    <>
      <label htmlFor={id} className=" max-sm:text-sm">
        {label}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={placeholder}
        className="py-2 px-4 focus:outline-none focus:border disabled:bg-slate-200 focus:border-slate-400 rounded-sm placeholder:text-slate-600 max-sm:placeholder:text-sm max-sm:px-2"
      />
    </>
  );
}

export default SpecificationInput;
