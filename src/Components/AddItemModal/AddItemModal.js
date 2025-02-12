import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import { useForm } from "../../hooks/useForm.js";
import { useFormValidator } from "../../hooks/useFormValidator.js";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const { values, handleChanges } = useForm({
    name: "",
    clothing_image: "",
    affliate_link: "",
    weather_condition: "",
  });
  const { formRef, errors, isDisabled } = useFormValidator(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values);
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Add Garment"
      formRef={formRef}
    >
      <ul className="inputs">
        <label className="input-header" htmlFor="name">
          Name
        </label>
        <li>
          <input
            className="input"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            required
            placeholder="Name"
            id="name"
            value={values.name}
            onChange={handleChanges}
          />
          {errors.name && (
            <p className="modal-form_input-error">{errors.name}</p>
          )}
        </li>
        <label className="input-header" htmlFor="input-url">
          Image
        </label>
        <li>
          <input
            className="input"
            type="url"
            name="clothing_image"
            required
            placeholder="Image Url"
            id="input-url"
            value={values.clothing_image}
            onChange={handleChanges}
          />
          {errors.clothing_image && (
            <p className="modal-form_input-error">{errors.clothing_image}</p>
          )}
        </li>
        <label className="input-header" htmlFor="input_link">
          Affiliate Link
        </label>
        <li>
          <input
            className="input"
            type="url"
            name="affiliate_link"
            placeholder="Insert link (Optional)"
            id="input_link"
            value={values.affiliate_link}
            onChange={handleChanges}
          />
        </li>
      </ul>

      <p className="weather-type-header input-header">Select Weather Type:</p>
      <div className="weather-inputs">
        <div>
          <input
            className="weather-type-button"
            name="weather_condition"
            type="radio"
            id="hot"
            value="hot"
            required
            checked={values.weather_condition === "hot"}
            onChange={handleChanges}
          />
          <label
            className="radio-label"
            name="weather-type-button"
            htmlFor="hot"
          >
            Hot
          </label>
        </div>
        <div>
          <input
            className="weather-type-button"
            name="weather_condition"
            type="radio"
            id="warm"
            value="warm"
            required
            checked={values.weather_condition === "warm"}
            onChange={handleChanges}
          />
          <label
            className="radio-label"
            name="weather-type-button"
            htmlFor="warm"
          >
            Warm
          </label>
        </div>
        <div>
          <input
            className="weather-type-button"
            name="weather_condition"
            type="radio"
            id="cold"
            value="cold"
            required
            checked={values.weather_condition === "cold"}
            onChange={handleChanges}
          />
          <label
            className="radio-label"
            name="weather-type=button"
            htmlFor="cold"
          >
            Cold
          </label>
          <div className="button-container">
            <button
              disabled={isDisabled}
              type="submit"
              className="modal-form-submit"
            >
              Add Garment
            </button>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
