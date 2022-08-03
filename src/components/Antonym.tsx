import React from "react";
import "./Antonym.css";

export default function Antonym(props:any) {
  let search = props.search;
  let setKeyword = props.setKeyword;

  function handleClick(e:any) {
    e.preventDefault();
    setKeyword(e.target.innerHTML);
    search(e.target.innerHTML);
  }

  if (props.antonym && props.antonym.length > 0) {
    return (
      <div className="Antonym">
        <span>Antonyms:</span>
        <ul>
          {props.antonym.map(function (antonym:any, index:any) {
            return (
              <li key={index}>
                <a href="/" onClick={handleClick}>
                  {antonym}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
