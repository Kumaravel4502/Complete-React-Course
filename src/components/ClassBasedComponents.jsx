import { Component } from "react";

class ClassBasedComponents extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <>
          <h1 style={{ color: "red", fontSize: "50px", textAlign: "center" }}>
            Class Based Components
          </h1>
          <button style={{ padding: "10px", fontSize: "40px" }}>
            Toggle text
          </button>
        </>
      </div>
    );
  }
}
export default ClassBasedComponents;
