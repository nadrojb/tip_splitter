function GreenBtn({percent, handlePercentageCalc}) {
  return (
    <button className="bg-teal-900 w-24 py-2  rounded-md text-white font-semibold mt-3" onClick={handlePercentageCalc}>
      {percent}%
    
    </button>
  );
}

export default GreenBtn;
