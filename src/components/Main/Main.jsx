import { useState, useEffect, useContext } from "react";
import EditProfile from "./components/Form/EditProfile/EditProfile";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Form/NewCard/NewCard";
import EditAvatar from "./components/Form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main() {
  const { currentUser } = useContext(CurrentUserContext);
  const [popup, setPopup] = useState(null);
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatar = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);

      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id),
      );
    } catch (error) {
      console.error(error);
    }
  }
  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error("Error al obtener las tarjetas:", err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar">
            <img
              src={currentUser.avatar}
              alt="Foto de perfil del usuario"
              className="profile__image"
            />
            <button
              className="profile__change-photo"
              aria-label="Foto de perfil"
              type="button"
              onClick={() => handleOpenPopup(editAvatar)}
            ></button>
          </div>
          <div className="profile__data">
            <h1 className="profile__username">{currentUser.name}</h1>
            <button
              aria-label="Editar Perfil"
              className="profile__edit-info"
              type="button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
            <h2 className="profile__about-me">{currentUser.about}</h2>
          </div>
        </div>
        <button
          className="profile__add-profile"
          aria-label="Agregar nueva tarjeta"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          +
        </button>
      </section>
      <section className="cards-container">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardLike={handleCardLike}
            handleOpenPopup={handleOpenPopup}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
