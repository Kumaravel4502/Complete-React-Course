import React from "react";
import "./style.css";

import ReactDOM from "react-dom/client";
import ClassBasedComponents from "./components/ClassBasedComponents";
import FunctionalComponent from "./components/FunctionalComponent";
import ProductList from "./components/ProductList";
import Users from "./users";
import Header from "./users/Header";
import button from "./components/context-concept/button";
import Productlayout from "./users/Productlayout";
import GlobalState from "./context/context";
import Button from "./components/context-concept/button";
import Text from "./components/context-concept/text";
import ButtonClick from "./components/context-concept/button";
import TextChange from "./components/context-concept/text";
import UserContext from "./context/context";
import UseReducerComponent from "./users/useReducercomponent";

const DummyProducts = ["product1", "product2", "product3"];
const App = () => {
  return (
    <>
      {/* <p>This is a Paragraph</p> */}
      {/* <ClassBasedComponents/> */}
      {/* <FunctionalComponent/> */}
      {/* <ProductList Products={DummyProducts} name="Kumaravel"/> */}
      {/* <Users /> */}
      <Header />
      {/* <Productlayout/> */}
      <ButtonClick />
      <TextChange />
      <UseReducerComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalState>
    <App />
  </GlobalState>
);

export default App;
