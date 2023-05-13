import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";

export default function SingleDefinition(props) {
  console.log(props.definition.synonyms);

  return (
    <div className="container">
      <div className="definitions my-4">
        <p>{props.definition.definition}</p>
        <Example definition={props.definition} />
      </div>
      <div className="row">
        <div className="col">
          {/* IF SYNONYMS PRESENT WE SHOW THEM */}
          {props.definition.synonyms.length !== 0 && (
            <div>
              <div>
                <em className="text-uppercase">SYNONYMS</em>
              </div>
              {props.definition.synonyms.map(function (synonym, index) {
                return (
                  <div>
                    <ul>
                      <li key={index}>
                        <Synonym synonym={synonym} />
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="col">
          {/* IF ANTONYMS PRESENT WE SHOW THEM */}
          {props.definition.antonyms.length !== 0 && (
            <div>
              <div>
                <em className="text-uppercase">ANTONYMS</em>
              </div>
              {props.definition.antonyms.map(function (antonym, index) {
                return (
                  <div>
                    <ul>
                      <li key={index}>
                        <Antonym antonym={antonym} />
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
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
