import MainContainerLeft from "../MainContainerLeft";
import MainContainerRight from "../MainContainerRight";

function MainContainer() {
  return (
    <div className="bg-white w-7/12 mx-auto rounded-2xl shadow-md p-10 flex">
      <MainContainerLeft />
      <MainContainerRight />
    </div>
  );
}

export default MainContainer;
