function TipBtn() {
  return (
    <div className="mb-2">
      <h2 className="text-sm tracking-wider font-medium">Select Tip%</h2>
      <div className="">
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mr-2 mb-2">
          5%
        </button>
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mr-2 mb-2">
          10%
        </button>
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mb-2">
          15%
        </button>
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mr-2 ">
          25%
        </button>
        <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mr-2 ">
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
