/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services" data-testid='testservices' >Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations" data-testid='testrealisations'>Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe" data-testid='testequipe'>Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
