import Link from "next/link";
import "../../styling/menuStyles.scss";
import withAuth from '../../helpers/withAuth';

const Menu = () => (
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <div className="menuButton">
        <span />
        <span />
        <span />
      </div>
      <div id="menu">
        <Link href="/callForPresentations">
          <a className="link callForPresentations">Call for presentations</a>
        </Link>
        <Link href="/talksAndSpeakers">
          <a className="link talksAndSpeakers">Talks and speakers</a>
        </Link>
        <Link href="/schedule" >
          <a className="link schedule">Schedule</a>
        </Link>
        {/*<Link href="/practicalities">
          <a className="link practicalities">Practicalities</a>
        </Link>
        <Link href="/location">
          <a className="link location">Location</a>
        </Link>*/}
        <Link href="/codeOfConduct">
          <a className="link codeOfConduct">Code of conduct</a>
        </Link>
        <Link href="/aboutUs">
          <a className="link aboutUs">About us</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Menu;