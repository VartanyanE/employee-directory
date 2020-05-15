import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.result.map(results => (
        <li className="list-group-item"  key = {results.id.value}>
          {results.name.first} {results.name.last}
          <img alt={results.name.first} className="img-fluid" src={results.picture.medium} />

        </li>
      ))}
    </ul>
  );
}

export default ResultList;
