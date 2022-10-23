import headerCSS from "./header.module.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  return (
    <header className={headerCSS.header}>
      <a href="awfawffw" className={headerCSS.resumeLink}>
        Download Resume
      </a>
      <nav className={headerCSS.navContainer} id="top">
        <BrowserRouter>
          <ul className={headerCSS.navElements}>
            <li>
              <Link to="#top" className={headerCSS.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" className={headerCSS.navLink}>
                About me
              </Link>
            </li>
            <li>
              <Link to="#portfolio" className={headerCSS.navLink}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="#contact" className={headerCSS.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </BrowserRouter>
      </nav>
    </header>
  );
}

export default Header;
