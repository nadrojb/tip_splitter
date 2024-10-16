function Form() {
  return (
    <form action="" className="p-10 w-6/12">
      <label htmlFor="bill">Bill</label>
      <div>
        <input
          type="text"
          name=""
          id="bill"
          placeholder="$"
          className="bg-blue-50 py-1 px-2 w-full rounded-md"
        />
      </div>
    </form>
  );
}

export default Form;
