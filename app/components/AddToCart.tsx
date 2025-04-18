"use client";
// This component is used to add items to the cart'
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("Add to Cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
