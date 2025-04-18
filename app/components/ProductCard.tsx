import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">ProductCard</h1>
      <p className="text-lg">This is a product card component.</p>
      <img
        className="w-40 h-40"
        src="https://via.placeholder.com/150"
        alt="Product Image"
      />
      <h2 className="text-lg font-bold">Product Name</h2>
      <p className="text-lg">$99.99</p>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
