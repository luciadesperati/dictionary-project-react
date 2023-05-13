import React from "react";
import SingleDefinition from "./SingleDefinition";

export default function Definitions(props) {
  console.log(props.meaning.partOfSpeech);

  return (
    <div>
      <p className="mt-5">
        <strong>{props.meaning.partOfSpeech}</strong>
      </p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <SingleDefinition definition={definition} />
            {index !== props.meaning.definitions.length - 1 && <hr />}{" "}
            {/* Add hr except for the last index */}
          </div>
        );
      })}
    </div>
  );
}
