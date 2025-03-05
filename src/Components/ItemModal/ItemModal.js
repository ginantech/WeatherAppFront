import { Link } from "react-router";
import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onDeleteClick, loggedIn }) => {
  return (
    <div className={"modal"}>
      <div className="preview-image-content">
        <button
          className="preview-image-close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="image-preview"
          src={`http://localhost:3001${selectedCard.clothing_image}`}
          alt="image-preview"
        ></img>
        <div className="preview-image-name">
          {selectedCard.name}
          {loggedIn && (
            <button className="delete-button" onClick={onDeleteClick}>
              Delete Item
            </button>
          )}
        </div>
        <div className="preview-image_info-container">
          <p className="preview-image-weather-type">
            Weather Type: {selectedCard.weather_condition}
          </p>
          {selectedCard.affiliate_link === null ? null : (
            <Link
              to={selectedCard.affiliate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="preview-image_purchase-button">
                Purchase
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
