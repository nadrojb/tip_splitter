function Form() {
  let labelValue = "Bill";
  return (
    <form action="" className=" ">
      <label htmlFor="bill" className="text-sm tracking-wider font-medium">
        Bill
      </label>
      <div className="w-full mt-1">
        <input
          type="text"
          name=""
          id="bill"
          placeholder="$"
          className="bg-blue-50 py-1 px-2 rounded-md w-11/12"
        />
      </div>
    </form>
  );
}

export default Form;
