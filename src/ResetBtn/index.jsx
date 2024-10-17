const HandleFormReset = (e) => {
  console.log("button clicked");
  return (
    <button
      onClick={HandleFormReset}
      className="bg-teal-600 w-full rounded-md text-teal-700 font-semibold py-2  "
    >
      RESET
    </button>
  );
};

export default HandleFormReset;


