function GreenBtn({percent}) {
  return (
    <button className="bg-teal-900 w-4/12 py-2 rounded-md text-white font-semibold ">
      {percent}%
    </button>
  );
}

export default GreenBtn;
