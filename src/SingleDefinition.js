import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
import "./SingleDefinition.css";

export default function SingleDefinition(props) {
  console.log(props.meaning);

  return (
    <div>
      <div className="definitions">
        <p className="definition">{props.meaning.definitions[0].definition}</p>
        <Example definition={props.meaning} />
      </div>
      <div className="row">
        <div className="col">
          {/* IF SYNONYMS PRESENT WE SHOW THEM */}
          {props.meaning.synonyms.length !== 0 && (
            <div>
              <div>
                <p className="synonyms-title">SYNONYMS</p>
              </div>
              {props.meaning.synonyms.map(function (synonym, index) {
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
          {props.meaning.antonyms.length !== 0 && (
            <div>
              <div>
                <p className="antonyms-title">ANTONYMS</p>
              </div>
              {props.meaning.antonyms.map(function (antonym, index) {
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
