import React from "react";
import Definitions from "./Definitions";
import Phonetics from "./Phonetics";

export default function SearchResult(props) {
  console.log(props.definition);
  if (props.definition) {
    return (
      <div className="search-result">
        <h1>{props.definition.word}</h1>
        {props.definition.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
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
