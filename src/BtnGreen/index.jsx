function GreenBtn({percent, handlePercentageCalc}) {
  return (
    <button className="bg-teal-900 w-3/12 mr-2 py-2 px-4 rounded-md text-white font-semibold" onClick={handlePercentageCalc}>
      {percent}%
    
    </button>
  );
}

export default GreenBtn;
