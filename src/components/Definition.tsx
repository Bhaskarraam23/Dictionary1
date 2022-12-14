import React from "react";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
import  "./Definitioncss";

export default function Definition(props:any) {
  return (
    <div className="Definition">
      <div>{props.definition.definition}</div>
      <div>
        <em className="example">{props.definition.example}</em>
      </div>
      <Synonym
        synonym={props.definition.synonyms}
        search={props.search}
        setKeyword={props.setKeyword}
      />
      <Antonym
        antonym={props.definition.antonyms}
        search={props.search}
        setKeyword={props.setKeyword}
      />
    </div>
  );
}
