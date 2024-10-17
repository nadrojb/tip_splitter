function GreenBtn({percent}) {
  return (
    <button className="bg-teal-900 w-24 py-2 rounded-md text-white font-semibold mr-3 ">
      {percent}%
    </button>
  );
}

export default GreenBtn;
