import aroundTheUs from "../../images/Vector.png";
import line from "../../images/Line.png";

function Header() {
  return (
    <Header className="Header">
      <img
        src={aroundTheUs}
        alt="Logo de AroundtheUS"
        className="Header__image"
      />
      <img src={line} alt="Línea blanca" className="Header__line" />
    </Header>
  );
}

export default Header;
