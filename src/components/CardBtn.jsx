import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function CardBtn(props) {
  return (
    //"btn-container btn--white"
    <div className={props.style == "blue" ? "btn-container btn--blue" : "btn-container btn--white"}>
      {props.icon.includes("envelop") ? <FaEnvelope /> : <FaLinkedin />}
      <span>{props.name}</span>
    </div>
  );
}

export default CardBtn;
