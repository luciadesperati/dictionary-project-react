import React from "react";
import Example from "./Example";

export default function SingleDefinition(props) {
  console.log(props.definition);

  return (
    <div className="definitions my-4">
      <p>{props.definition.definition}</p>
      <Example definition={props.definition} />
    </div>
  );

  //   if (props.definition.synonyms.length === 0) {
  //     return (
  //       <div className="definitions">
  //         <p>{props.definition.definition}</p>
  //         <Example definition={props.definition} />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="definitions">
  //         <p>{props.definition.definition}</p>
  //         <Example definition={props.definition} />

  //         <h5 className="text-uppercase">Synonim</h5>
  //         {props.definition.synonyms.map(function (synonym, index) {
  //           return (
  //             <div key={index}>
  //               <p>{synonym}</p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   }
}
