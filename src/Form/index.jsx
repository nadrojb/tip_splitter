function Form({ id, title, placeholder, handleChange}) {
  let labelValue = "Bill";
  return (
    <form action="" className=" ">
      <label
        htmlFor="bill"
        id="{id}"
        className="text-sm tracking-wider font-medium"
      >
        {title}
      </label>
      <div className="w-full mt-1">
        <input
          type="text"
          name=""
          id="bill"
          placeholder={placeholder}
          className="bg-blue-50 py-1 px-2 rounded-md w-11/12"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default Form;
