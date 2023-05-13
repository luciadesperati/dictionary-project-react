import React from "react";

export default function Antonym(props) {
  console.log(`Antonym ${props.antonym}`);

  return (
    <div>
      <p>{props.antonym}</p>
    </div>
  );
}
