import React from "react";
import SingleDefinition from "./SingleDefinition";

export default function Definitions(props) {
  console.log(props.meaning.partOfSpeech);

  return (
    <div>
      <p className="mt-5">
        <strong>{props.meaning.partOfSpeech}</strong>
      </p>
      
      <SingleDefinition definition={props.meaning.definitions[0]} />

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
