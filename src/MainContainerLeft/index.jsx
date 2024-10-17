import Form from "../Form";
import GreenBtn from "../BtnGreen";
import BtnWhite from "../assets/BtnWhite";

function MainContainerLeft() {
  return (
    <div className="w-6/12">
      <Form title={"Bill"} placeholder={"$"} />
      <div className="w-11/12 mt-8 mb-8">
        <h2 className="text-sm font-medium">Select tip %</h2>
        <GreenBtn percent={"5"} id={5} />
        <GreenBtn percent={"10"} id={10}/>
        <GreenBtn percent={"15"} id={15}/>
        <GreenBtn percent={"25"} id={25}/>
        <GreenBtn percent={"50"} id={50}/>
        <BtnWhite BtnWhiteText={'CUSTOM'} />
      </div>
      <Form title={"Number of people"} />
    </div>
  );
}

export default MainContainerLeft;
