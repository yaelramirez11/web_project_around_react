export default function EditProfile() {
  return (
    <form className="form" noValidate>
      <input
        className="form__input form__input_name"
        type="text"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        name="name"
        required
      />
      <span className="form__input-error"></span>
      <input
        className="form__input form__input_about"
        type="text"
        placeholder="Acerca de mí"
        minLength="2"
        maxLength="200"
        name="about"
        required
      />
      <span className="form__input-error"></span>
      <button type="submit" className="form__submit">
        Guardar
      </button>
      <div className="loader" id="loader">
        <div className="loader__id" id="loader__circle"></div>
      </div>
    </form>
  );
}
