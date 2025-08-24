import React from "react";
import "./css/ProductCard.css";

function ProductCard({ title, description, images }) {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <div className="image-carousel">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`${title} ${idx + 1}`} />
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;
