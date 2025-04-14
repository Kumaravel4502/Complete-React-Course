import { useContext } from "react";
import { GlobalContext } from "../../context/context";

const TextChange = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <>
      <h1
        style={{
          fontSize: theme === "light" ? "50px" : "100px",
          backgroundColor: theme === "light" ? "white" : "white",
          color: theme === "light" ? "violet" : "yellow",
        }}
        className="text-2xl text-center m-7"
      >
        Kumaravel
      </h1>
    </>
  );
};

export default TextChange;
