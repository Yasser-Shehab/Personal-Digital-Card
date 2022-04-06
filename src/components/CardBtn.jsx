import React from "react";

function CardBtn({ children, style, name }) {
  return (
    //"btn-container btn--white"
    <div className={style == "blue" ? "btn-container btn--blue" : "btn-container btn--white"}>
      {children}
      <span>{name}</span>
    </div>
  );
}

export default CardBtn;
