import Form from "../Form";
import GreenBtn from "../BtnGreen";
import BtnWhite from "../assets/BtnWhite";

function MainContainerLeft() {
  return (
    <div className="w-6/12">
      
      <Form />
      <div>
        <h2>Select tip %</h2>
        <GreenBtn />
        <GreenBtn />
        <GreenBtn />
        <GreenBtn />
        <GreenBtn />
        <BtnWhite />
      </div>
      <Form />
    </div>
  );
}

export default MainContainerLeft;
