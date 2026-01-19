import profilePic from "../../images/Avatar.png";
import { useState } from "react";
import EditProfile from "./components/Form/EditProfile/EditProfile";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Form/NewCard/NewCard";
import EditAvatar from "./components/Form/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

function Main() {
  const [popup, setPopup] = useState(null);
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editAvatar = { title: "Foto de perfil", children: <EditAvatar /> };
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  console.log(cards);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar">
            <img
              src={profilePic}
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
            <h1 className="profile__username">Jacques Costeau</h1>
            <button
              aria-label="Editar Perfil"
              className="profile__edit-info"
              type="button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
            <h2 className="profile__about-me">Explorador</h2>
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
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
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
