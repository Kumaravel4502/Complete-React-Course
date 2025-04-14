// import { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "HIDE_TEXT":
//       return {
//         ...state,
//         showText: false,
//       };
//     case "SHOW_TEXT":
//       return {
//         ...state,
//         showText: true,
//       };
//     case "SHOW_TEXT_STYLES":
//       return {
//         ...state,
//         showTextStyles: !state.showTextStyles,
//       };
//     default:
//       return state;
//   }
// };
// const UseReducerComponent = () => {
//   const initialState = {
//     showText: false,
//     showTextStyles: false,
//   };
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="text-center">
//       {state.showText ? (
//         <h1
//           className={`text-4xl ${state.showTextStyles ? "text-blue-500" : ""}`}
//         >
//           Use Reducer Hook Example
//         </h1>
//       ) : null}
//       <button
//         onClick={() => dispatch({ type: "HIDE_TEXT" })}
//         className="bg-red-500 p-3 rounded-2xl m-2"
//       >
//         Hide Text
//       </button>
//       <button
//         onClick={() => dispatch({ type: "SHOW_TEXT" })}
//         className="bg-green-500 p-3 rounded-2xl m-2"
//       >
//         Show Text
//       </button>
//       <button
//         onClick={() => dispatch({ type: "SHOW_TEXT_STYLES" })}
//         className="bg-pink-500 p-3 rounded-2xl m-2"
//       >
//         Change styles text
//       </button>
//     </div>
//   );
// };

// export default UseReducerComponent;

import React from 'react';
import { useReducer } from 'react';

const Counter = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: (state.count = 0),
      };
    default:
      throw Error("Invalid action");
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(Counter, { count: 0 });
  return (
    <div className="text-center">
      <h1>{state.count}</h1>
      {console.log(state)}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREASE</button>
    </div>
  );
};

export default UseReducerComponent;
