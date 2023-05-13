import React from "react";
import Definitions from "./Definitions";

export default function SearchResult(props) {
  console.log(props.definition);
  if (props.definition) {
    return (
      <div className="search-result">
        <h1>{props.definition.word}</h1>
        <p className="phonetics">{props.definition.phonetics[0].text}</p>
        <h2 className="text-uppercase">Definitions</h2>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="">
              <Definitions meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
