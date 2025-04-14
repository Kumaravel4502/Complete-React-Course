import { createContext, useState } from "react";

//  const UserContext=createContext({Name:"Kumaravel",Age:"19",Place:"Chennai"});

//  export default UserContext;

// import { createContext } from "react";

//  const UserContext=createContext({name:'Kumar',age:20});

//  export default UserContext;




//create the context
export const GlobalContext = createContext(null);

//create the global state that receive component as a children
const GlobalState = ({ children }) => {
  const [theme, settheme] = useState('light');
  const handlechangeonbtnclick = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <GlobalContext.Provider value={{ theme, handlechangeonbtnclick }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};
export default GlobalState;
