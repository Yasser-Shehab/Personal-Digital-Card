import React from "react";

function Info(props) {
  return (
    <>
      <div className="info-wrapper">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </>
  );
}

export default Info;
