function AuthInput({ name, type, label }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        required
        name={name}
        id={name}
        type={type}
        className=" bg-slate-300 rounded-sm w-full h-8 p-2 focus:outline-slate-400"
      />
    </>
  );
}

export default AuthInput;
