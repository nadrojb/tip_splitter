import Form from "../Form";
import GreenBtn from "../BtnGreen";
import BtnWhite from "../assets/BtnWhite";
import { useState } from "react";
import AmountHeading from "../AmountHeading";
import HandleFormReset from "../ResetBtn";
import TipAmount from "../TipAmount";

function AppContainer() {
  const [percentageAmount, setDiscountAmount] = useState(0);

  function handle5PercentageCalc() {
    console.log("clicked");

    setDiscountAmount(5);
  }

  return (
    <div className="flex w-full">
      <div className="w-6/12">
        <Form title={"Bill"} placeholder={"$"} />
        <div className="w-11/12 mt-8 mb-8">
          <h2 className="text-sm font-medium">Select tip %</h2>
          <GreenBtn
            percent={"5"}
            handlePercentageCalc={handle5PercentageCalc}
          />
          <GreenBtn percent={"10"} />
          <GreenBtn percent={"15"} />
          <GreenBtn percent={"25"} />
          <GreenBtn percent={"50"} />
          <BtnWhite BtnWhiteText={"CUSTOM"} />
        </div>
        <Form title={"Number of people"} />
        <p>{percentageAmount}%</p>
      </div>
      <div className=" px-6 py-8 w-6/12 rounded-lg bg-teal-900 ">
        <div className="flex justify-between mb-8 items-center">
          <AmountHeading amountTitle={"Tip Amount"} />
          <TipAmount />
        </div>
        <div className="flex justify-between mb-24 items-center">
          <AmountHeading amountTitle={"Total"} />
          <TipAmount />
        </div>
        <HandleFormReset />
      </div>
    </div>
  );
}

export default AppContainer;
