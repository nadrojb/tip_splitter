function TipBtn() {
  return (
    <div className="my-7 w-11/12">
      <h2 className="text-sm tracking-wider font-medium mb-2">Select Tip%</h2>
      <div className="">
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mr-3 mb-3">
          5%
        </button>
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mr-3 mb-3">
          10%
        </button>
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mb-3">
          15%
        </button>
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mr-3 ">
          25%
        </button>
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mr-3 ">
          50%
        </button>
        <button className="bg-blue-50 w-24 py-2 rounded-md text-black font-semibold">
          Custom
        </button>
        
      </div>
    </div>
  );
}

export default TipBtn;
