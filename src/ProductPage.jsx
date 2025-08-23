import React from "react";
import ProductCard from "./ProductCard";
import "./ProductPage.css";

const products = [
  {
    title: "Glass Cleaner",
    description: "Leaves your glass surfaces crystal clear and streak-free. Available in lemon and lavender scents.",
    images: [
      "https://images.pexels.com/photos/5641773/pexels-photo-5641773.jpeg",
      "https://images.pexels.com/photos/6195119/pexels-photo-6195119.jpeg",
    ],
  },
  {
    title: "Floor Cleaner",
    description: "Kills 99.9% of germs and leaves a lasting fragrance. Citrus and floral options available.",
    images: [
      "https://images.pexels.com/photos/3831771/pexels-photo-3831771.jpeg",
      "https://images.pexels.com/photos/6195111/pexels-photo-6195111.jpeg",
    ],
  },
  {
    title: "Washroom Cleaner",
    description: "Removes stubborn stains and disinfects washroom surfaces effectively.",
    images: [
      "https://images.pexels.com/photos/6195113/pexels-photo-6195113.jpeg",
      "https://images.pexels.com/photos/4108727/pexels-photo-4108727.jpeg",
    ],
  },
  {
    title: "Toilet Cleaner",
    description: "Powerful formula for deep toilet cleaning. Available in ocean and mint scents.",
    images: [
      "https://images.pexels.com/photos/8442615/pexels-photo-8442615.jpeg",
      "https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg",
    ],
  },
  {
    title: "Phenyl",
    description: "Classic disinfectant with long-lasting fragrance. Rose, sandalwood, and jasmine available.",
    images: [
      "https://images.pexels.com/photos/4108711/pexels-photo-4108711.jpeg",
      "https://images.pexels.com/photos/18646415/pexels-photo-18646415/free-photo-of-cleaning-supplies-on-a-pink-background.jpeg",
    ],
  },
  {
    title: "Wall Cleaner",
    description: "Removes grease, stains, and fingerprints without damaging the paint.",
    images: [
      "https://images.pexels.com/photos/6195116/pexels-photo-6195116.jpeg",
      "https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg",
      "https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg",
    ],
  },
  {
    title: "Car Cleaner",
    description: "Shines and protects your car surfaces — both interior and exterior.",
    images: [
      "https://images.pexels.com/photos/6186819/pexels-photo-6186819.jpeg",
      "https://images.pexels.com/photos/6186821/pexels-photo-6186821.jpeg",
    ],
  },
];

function ProductPage() {
  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
