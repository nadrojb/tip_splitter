import Form from "../Form";
import GreenBtn from "../BtnGreen";
import BtnWhite from "../assets/BtnWhite";
import { useEffect, useState } from "react";
import AmountHeading from "../AmountHeading";
import HandleFormReset from "../ResetBtn";
import TipAmount from "../TipAmount";

function AppContainer() {
  const [percentageAmount, setDiscountAmount] = useState(0);
  const [billInputContent, setBillInputContent] = useState("");
  const [personInputContent, setPersonInputContent] = useState("");
  const [customTipAmount, setCustomTipAmount] = useState(0);
  const [tipTotal, setTotalTip] = useState(0);
  const [totalPricePerPerson, setPricePerPerson] = useState(0);

  function handle5PercentageCalc() {
    console.log("5");
    setDiscountAmount(5);
  }
  function handle10PercentageCalc() {
    console.log("10");
    setDiscountAmount(10);
  }
  function handle15PercentageCalc() {
    console.log("15");
    setDiscountAmount(15);
  }
  function handle25PercentageCalc() {
    console.log("25");
    setDiscountAmount(25);
  }
  function handle50PercentageCalc() {
    console.log("50");
    setDiscountAmount(50);
  }

  function textFromBillInput(e) {
    setBillInputContent(e.target.value);
    console.log(billInputContent);
  }

  function textFromPeopleInput(e) {
    setPersonInputContent(e.target.value);
    console.log(personInputContent);
  }

  function getCustomTipAmount(e) {
    setCustomTipAmount(e.target.value);
    console.log(customTipAmount);
  }

  useEffect(() => {
    let billAmount = (billInputContent * percentageAmount) / 100;
    console.log(billAmount);
    setTotalTip(billAmount / personInputContent);
  }, [percentageAmount, billInputContent, personInputContent]);

  useEffect(() => {
    let TotalPerPerson = billInputContent / personInputContent + tipTotal;
    console.log(TotalPerPerson);
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-6/12">
        <Form
          title={"Bill"}
          placeholder={"$"}
          handleChange={textFromBillInput}
        />
        <div className="w-11/12 mt-8 mb-8">
          <h2 className="text-sm font-medium">Select tip %</h2>
          <div className="flex flex-wrap justify-between">
            <GreenBtn
              percent={"5"}
              handlePercentageCalc={handle5PercentageCalc}
            />
            <GreenBtn
              percent={"10"}
              handlePercentageCalc={handle10PercentageCalc}
            />
            <GreenBtn
              percent={"15"}
              handlePercentageCalc={handle15PercentageCalc}
            />
            <GreenBtn
              percent={"25"}
              handlePercentageCalc={handle25PercentageCalc}
            />
            <GreenBtn
              percent={"50"}
              handlePercentageCalc={handle50PercentageCalc}
            />
            <span className="w-24 mt-2 ">
              <Form placeholder={"CUSTOM"} handleChange={getCustomTipAmount} />
            </span>
          </div>
        </div>
        <Form title={"Number of people"} handleChange={textFromPeopleInput} />
      </div>
      <div className=" px-6 py-8 w-6/12 rounded-lg bg-teal-900 ">
        <div className="flex justify-between mb-8 items-center">
          <AmountHeading amountTitle={"Tip Amount"} />
          <TipAmount tipTotal={tipTotal} />
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
