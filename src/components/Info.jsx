import React from "react";

function Info(props) {
  return (
    <>
      <div className="info-wrapper">
        <h3>{props.title}</h3>
        {props.children}
      </div>
    </>
  );
}

export default Info;
