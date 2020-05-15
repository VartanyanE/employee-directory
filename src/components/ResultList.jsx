import React from "react";
import './resultlist.css'

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.result.slice(0,7).map(results => (
        <li className="list-group-item my-list"  key = {results.id.value}>
          <strong>{results.name.first} {results.name.last} </strong>
          <br/>
          <img alt={results.name.first} className="img-fluid image" src={results.picture.medium} />
          <br />
          {results.dob.age}  years old
          <br/>
          Phone Number : {results.phone}
          <br/>
          Email: {results.email}

        </li>
      ))}
    </ul>
  );
}

export default ResultList;
