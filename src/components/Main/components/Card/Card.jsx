import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card({ card, handleOpenPopup }) {
  function handleImageClick() {
    handleOpenPopup({
      title: null,
      children: <ImagePopup card={card} />,
    });
  }
  return (
    <li className="element">
      <div className="element__rectangle">
        <button
          aria-label="Delete card"
          className="element__delete-button"
          type="button"
        >
          <img
            src="/images/trash.svg"
            alt="Delete"
            className="element__delete-button-image"
          />
        </button>
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleImageClick}
        />
        <div className="element__info">
          <h2 className="element__text">{card.name}</h2>
          <button
            aria-label="Like card"
            type="button"
            className="element__button"
          />
        </div>
      </div>
    </li>
  );
}
