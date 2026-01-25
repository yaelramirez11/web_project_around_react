import ImagePopup from "../ImagePopup/ImagePopup";
import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import trashIcon from "../../../../images/Trash.png";
import likeIcon from "../../../../images/Like.png";

export default function Card({ card, handleOpenPopup, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = card.likes?.some((user) => user._id === currentUser._id);
  const cardLikeButtonClassName = `element__button ${
    isLiked ? "element__button_active" : ""
  }`;

  function handleImageClick() {
    handleOpenPopup({
      title: null,
      children: <ImagePopup card={card} />,
    });
  }
  function handleLikeClick() {
    onCardLike(card);
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
            src={trashIcon}
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
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          >
            <img className="element__button-image" src={likeIcon} />
          </button>
        </div>
      </div>
    </li>
  );
}
