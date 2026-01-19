export default function NewCard() {
  return (
    <form className="form form_add-card">
      <input
        className="form__input form__input_title"
        type="text"
        placeholder="Título de la imagen"
        minLength="2"
        maxLength="30"
        name="title"
        required
      />
      <span className="form__input-error"></span>
      <input
        className="form__input form__input_link"
        type="url"
        placeholder="Enlace de la imagen"
        name="link"
        required
      />
      <span className="form__input-error"></span>
      <button type="submit" className="form__submit">
        Crear
      </button>
    </form>
  );
}
