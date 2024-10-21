import Form from "../Form";
import GreenBtn from "../BtnGreen";
import { useEffect, useState } from "react";
import AmountHeading from "../AmountHeading";
import HandleFormReset from "../ResetBtn";
import TipAmount from "../TipAmount";

function AppContainer() {
  const [discountAmount, setDiscountAmount] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [amountOfPeople, setaAmountOfPeople] = useState(1);
  const [customTipAmount, setCustomTipAmount] = useState(0);
  const [TotalTipAmount, setTotalTipAmount] = useState(0);
  const [totalPricePerPerson, setPricePerPerson] = useState("");

  function select5PercentTip() {
    console.log("5");
    setDiscountAmount(5);
  }
  function select10PercentTip() {
    console.log("10");
    setDiscountAmount(10);
  }
  function select15PercentTip() {
    console.log("15");
    setDiscountAmount(15);
  }
  function select25PercentTip() {
    console.log("25");
    setDiscountAmount(25);
  }
  function select50PercentTip() {
    console.log("50");
    setDiscountAmount(50);
  }

  function updateBillAmount(e) {
    setBillAmount(parseFloat(e.target.value) || 0);

    console.log(billAmount);
  }

  function updatePeopleAmount(e) {
    setaAmountOfPeople(parseFloat(e.target.value) || 1);

    console.log(amountOfPeople);
  }

  function updateCustomTipAmount(e) {
    setCustomTipAmount(e.target.value);
    console.log(customTipAmount);
  }

  useEffect(() => {
    const discount = discountAmount / 100;
    const totalTip = billAmount * discount;
    setTotalTipAmount(totalTip.toFixed(2));
  }, [billAmount, discountAmount, amountOfPeople]);

  useEffect(() => {
    const billPerPerson = billAmount / amountOfPeople;
    const total = billPerPerson + TotalTipAmount;
    setPricePerPerson(total);
  }, [billAmount, amountOfPeople, TotalTipAmount]);

  return (
    <div className="flex w-full">
      <div className="w-6/12">
        <Form
          title={"Bill"}
          placeholder={"$"}
          handleChange={updateBillAmount}
        />
        <div className="w-11/12 mt-8 mb-8">
          <h2 className="text-sm font-medium">Select tip %</h2>
          <div className="flex flex-wrap justify-between">
            <GreenBtn percent={"5"} handlePercentageCalc={select5PercentTip} />
            <GreenBtn
              percent={"10"}
              handlePercentageCalc={select10PercentTip}
            />
            <GreenBtn
              percent={"15"}
              handlePercentageCalc={select15PercentTip}
            />
            <GreenBtn
              percent={"25"}
              handlePercentageCalc={select25PercentTip}
            />
            <GreenBtn
              percent={"50"}
              handlePercentageCalc={select50PercentTip}
            />
            <span className="w-24 mt-2 ">
              <Form
                placeholder={"CUSTOM"}
                handleChange={updateCustomTipAmount}
              />
            </span>
          </div>
        </div>
        <Form title={"Number of people"} handleChange={updatePeopleAmount} />
      </div>
      <div className=" px-6 py-8 w-6/12 rounded-lg bg-teal-900 ">
        <div className="flex justify-between mb-8 items-center">
          <AmountHeading calculationResultHeading={"Tip Amount"} />
          <TipAmount displayCaluculationTotal={TotalTipAmount} />
        </div>
        <div className="flex justify-between mb-24 items-center">
          <AmountHeading calculationResultHeading={"Total"} />
          <TipAmount displayCaluculationTotal={totalPricePerPerson} />
        </div>
        <HandleFormReset />
      </div>
    </div>
  );
}

export default AppContainer;
