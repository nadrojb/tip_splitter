function Form() {
  let labelValue = "Bill";
  return (
    <form action="" className=" ">
      <label htmlFor="bill" className="text-sm tracking-wider font-medium">
        Bill
      </label>
      <div className="w-full">
        <input
          type="text"
          name=""
          id="bill"
          placeholder="$"
          className="bg-blue-50 py-1 px-2 rounded-md"
        />
      </div>
    </form>
  );
}

export default Form;
