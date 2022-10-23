import footerCSS from "./footer.module.css";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className={footerCSS.sectionContact} id="contact">
      <h2>Contact Me</h2>
      <a
        href="mailto: dmitriifilatovjp@gmail.com"
        className={footerCSS.emailLink}
      >
        Send an email! ✉
      </a>
      <div>
        <p>or visit my social links:</p>
        <ul className={footerCSS.contactLinks}>
          <li>
            <a
              href="https://github.com/DmitriiFilatov"
              className={footerCSS.contactLink}
            >
              <FaGithub />
              <p>Github</p>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/introuble0"
              className={footerCSS.contactLink}
            >
              <FaTwitter />
              <p>Twitter</p>
            </a>
          </li>
          <li>
            <a
              href="https://discordapp.com/users/224175750956318720"
              className={footerCSS.contactLink}
            >
              <FaDiscord />
              <p>Discord</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
