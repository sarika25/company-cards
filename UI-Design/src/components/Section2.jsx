import Navbar2 from "./Section2/Navbar2";
import Content2 from "./Section2/Content2";

const Section2 = (props) => {
  return (
    <div className="h-screen w-full flex flex-col ">
      <Navbar2 />
      <Content2 users={props.users} />
    </div>
  );
};

export default Section2;
