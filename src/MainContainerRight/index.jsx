import AmountHeading from "../AmountHeading";
import TipAmount from "../TipAmount";
import HandleFormReset from "../ResetBtn";

function MainContainerRight() {
  return (
    <div className=" px-6 py-8 w-6/12 rounded-lg bg-teal-900 ">
      <div className="flex justify-between mb-8 items-center">
        <AmountHeading amountTitle={'Tip Amount'} />
        <TipAmount />
      </div>
      <div className="flex justify-between mb-24 items-center">
        <AmountHeading amountTitle={'Total'}/>
        <TipAmount />
      </div>
      <HandleFormReset />
    </div>
  );
}

export default MainContainerRight;
