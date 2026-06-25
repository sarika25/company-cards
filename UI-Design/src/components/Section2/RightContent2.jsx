import RightCard from "./RightCard";

const RightContent2 = (props) => {
  console.log(props.users);
  return (
    <div className="w-2/3 h-full p-6 flex flex-nowrap gap-10 overflow-x-auto scrollbar-none rounded-4xl">
      {props.users.map((elem, idx) => {
        return (
          <RightCard
            id={idx}
            key={idx}
            img={elem.img}
            button_text={elem.button_text}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent2;
