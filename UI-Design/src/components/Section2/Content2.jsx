import LeftContent2 from "./LeftContent2";
import RightContent2 from "./RightContent2";

const Content2 = (props) => {
  return (
    <div className="py-4 px-18 flex gap-10 items-stretch flex-1 ">
      <LeftContent2 />
      <RightContent2 users={props.users} />
    </div>
  );
};

export default Content2;
