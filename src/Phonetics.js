import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div>
      <p className="phonetics">{props.phonetic.text}</p>
      <div className="btn"></div>
    </div>
  );
}
