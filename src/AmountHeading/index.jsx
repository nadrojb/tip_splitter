function AmountHeading({amountTitle}) {
  return (
    <div className="">
      <h2 className="text-white font-medium text-sm">{amountTitle}</h2>
      <h3 className="text-xs font-medium text-teal-200">/ person</h3>
    </div>
  );
}

export default AmountHeading;
