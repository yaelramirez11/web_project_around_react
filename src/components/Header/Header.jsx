import aroundTheUs from "../../images/Vector.png";
import line from "../../images/Line.png";

function header() {
  return (
    <header className="header">
      <img
        src={aroundTheUs}
        alt="Logo de AroundtheUS"
        className="header__image"
      />
      <img src={line} alt="Línea blanca" className="header__line" />
    </header>
  );
}

export default header;
