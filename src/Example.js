import React from "react";
import "./Example.css";

export default function Example(props) {
  // console.log(`Shoew examples ${props.definition.example}`);

  if (props.definition.example === undefined) {
    return null;
  } else {
    return (
      <div>
        <p className="example-title">example</p>
        <p className="example-text">{props.definition.example}</p>
      </div>
    );
  }
}
