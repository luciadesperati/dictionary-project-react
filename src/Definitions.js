import React from "react";
import SingleDefinition from "./SingleDefinition";
import "./Definitions.css";

export default function Definitions(props) {
  console.log(props.meaning.partOfSpeech);

  return (
    <div>
      <p className="part-of-speech">{props.meaning.partOfSpeech}</p>

      <SingleDefinition meaning={props.meaning} />

      {/* {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <SingleDefinition definition={definition} />
            {index !== props.meaning.definitions.length - 1 && <hr />}{" "}
          </div>
        );
      })} */}
    </div>
  );
}
