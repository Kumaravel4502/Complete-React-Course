import { useContext } from "react";

import UserContext from "../context/context";

const Header = () => {
  // const Data = useContext(UserContext);

  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <div>
            <img
              src="https://ik.imagekit.io/ixthr16gh/Intern-Work/Logo.png"
              alt=""
              className="w-28"
            />
          </div>
          <div className="Nav-bar py-5">
            <ul className="flex gap-5 text-lg font-semibold">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Service</li>
              {/* <li>{Data.age}</li>
              <li>{Data.name}</li> */}
            </ul>
          </div>

          <div className="Cart mt-2">
            <img
              src="https://ik.imagekit.io/ixthr16gh/Self-Assesment/logo.svg"
              alt=""
              className="w-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
