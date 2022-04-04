import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="card-footer">
      <a href="https://github.com/Yasser-Shehab" target="_blank">
        <div className="footer__icon">
          <FaTwitterSquare />
        </div>
      </a>

      <a href="https://github.com/Yasser-Shehab" target="_blank">
        <div className="footer__icon">
          <FaGithubSquare />
        </div>
      </a>
      <a href="https://www.facebook.com/yassershehab.eldeen/" target="_blank">
        <div className="footer__icon">
          <FaFacebookSquare />
        </div>
      </a>
    </footer>
  );
}

export default Footer;
