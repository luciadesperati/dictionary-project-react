import React from "react";

export default function Example(props) {
  console.log(`Shoew examples ${props.definition.example}`);

  if (props.definition.example === undefined) {
    return null;
  } else {
    return (
      <div>
        <em>example</em>
        <p>{props.definition.example}</p>
      </div>
    );
  }
}
