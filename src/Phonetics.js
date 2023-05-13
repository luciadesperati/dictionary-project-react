import React from "react";
import { Icon } from "@iconify/react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="d-flex align-items-center">
      <p className="phonetics mb-0">{props.phonetic.text}</p>
      <div className="phonetics-audio">
        <a
          className="footer-link"
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="ion:volume-high-outline" />
        </a>
      </div>
    </div>
  );
}
