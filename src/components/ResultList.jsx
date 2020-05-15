import React from "react";
import './resultlist.css'

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.result.slice(0,5).map(results => (
        <li className="list-group-item my-list"  key = {results.id.value}>
          {results.name.first} {results.name.last}
          <br/>
          <img alt={results.name.first} className="img-fluid image" src={results.picture.medium} />

        </li>
      ))}
    </ul>
  );
}

export default ResultList;
