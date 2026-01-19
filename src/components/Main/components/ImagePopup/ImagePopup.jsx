export default function ImagePopup({ card }) {
  return (
    <>
      <img className="element__image" src={card.link} alt="Imagen del lugar" />
      <p className="element__text">{card.name}</p>
    </>
  );
}
