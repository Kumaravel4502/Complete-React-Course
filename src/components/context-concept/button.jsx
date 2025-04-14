import { useContext } from "react";
import { GlobalContext } from "../../context/context";

const ButtonClick = () => {
  const { handlechangeonbtnclick } = useContext(GlobalContext);
  return (
    <>
      <div className="text-center mt-10">
        <button
          onClick={handlechangeonbtnclick}
          className="bg-black text-white p-4 rounded-3xl cursor-pointer hover:bg-amber-200 hover:text-black"
        >
          Change Theme
        </button>
      </div>
    </>
  );
};
export default ButtonClick;
