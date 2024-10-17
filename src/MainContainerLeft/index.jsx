import Form from "../Form";
import GreenBtn from "../BtnGreen";
import BtnWhite from "../assets/BtnWhite";

function MainContainerLeft() {
  return (
    <div className="w-6/12">
      <Form title={"Bill"} placeholder={"$"} />
      <div>
        <h2>Select tip %</h2>
        <GreenBtn percent={"5"} id={1} />
        <GreenBtn percent={"10"} />
        <GreenBtn percent={"15"} />
        <GreenBtn percent={"25"} />
        <GreenBtn percent={"50"} />
        <BtnWhite />
      </div>
      <Form title={"Number of people"} />
    </div>
  );
}

export default MainContainerLeft;
