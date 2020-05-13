import React from "react";

function UserDetail(props) {
  return (
    <div className="text-center">
     
      <h3>Gender: {props.gender}</h3>
      <h3>Name: {props.name}</h3>
      
    </div>
  );
}

export default UserDetail;
