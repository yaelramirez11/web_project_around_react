export default function EditAvatar() {
  return (
    <form className="form form_update-avatar" noValidate>
      <input
        className="form__input form__input_avatar-link"
        type="url"
        name="avatar"
        placeholder="Enlace de la nueva imagen"
        required
      />
      <span className="form__input-error"></span>

      <button type="submit" className="form__submit">
        Guardar
      </button>
    </form>
  );
}
