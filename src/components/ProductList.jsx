// import { useState } from "react";
// import ProductItem from "./ProductItem";

import { useEffect, useState } from "react";

// const ProductList = ({ name, Products }) => {
//   // console.log(props);
//   // const {name}=props;
//   //   const flag = true;

//   const initialState = false;
//   const [flag, setflag] = useState(initialState);

// function handleToggleText() {
//    setflag(!flag);
//     console.log(flag);
// }

//   return (
//     <>
//       <h1>Product List</h1>
//       {flag ? <p>My Name is {name}</p> : <p>Empty</p>}
//       <button
//         onClick={handleToggleText}
//       >
//         Toggle text
//       </button>
//       {/* <ProductItem /> */}
//       <ul>
//         {Products.map((item, index) => {
//           return (
//             <>
//               <ProductItem singleProduct={item} key={index} />
//             </>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default ProductList;

const ProductList = () => {
  const [value, setValue] = useState(0);
  const [changestyle, setchangestyle] = useState(false);
console.log(changestyle);
  useEffect(() => {
    // console.log("count changes");
    if (value === 10) setchangestyle(true);
    else setchangestyle(false);
  }, [value]);
  return (
    <div style={{ fontSize: "50px", textAlign: "center" }}>
      <h1 style={{ color: "red", fontSize: "50px", textAlign: "center" }}>
        Counter
      </h1>
      <p >{value}</p>
      <button
        style={{backgroundColor: changestyle ? "green" : "red", fontSize: "50px" }}
        onClick={() => {
          setValue(value + 1);
          console.log("Increase button clicked");

          return ()=>{
            console.log("cleanup function called");

            
          }
        }}
      >
        Increase
      </button>
      <button
        style={{ fontSize: "50px", marginLeft: "200px" }}
        onClick={() => {
          setValue(0);
          console.log("Reset button clicked");
        }}
      >
        Reset
      </button>
      <button
        style={{ fontSize: "50px", marginLeft: "200px" }}
        onClick={() => {
          setValue(value - 1);
          console.log("Decrease button clicked");
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default ProductList;
