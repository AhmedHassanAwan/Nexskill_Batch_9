

import React from 'react'
import ProductList from '../components/Data'
import "../styles/style.css"
import { useNavigate } from "react-router";

function Products() {

  console.log(ProductList);

  const navigate = useNavigate();
  
 
return (
  <>
    <h1>Daraz Products</h1>

    <div className="product-container">
      {ProductList.length > 0 ? (
        ProductList.map((items , index) => (
          <div className="product-card" key={index}>
            <span className="product-id">
              ID: {items.id}
            </span>

            <h2>{items.name}</h2>

            <h3>Rs. {items.price}</h3>

            <p>Brand: {items.brand}</p>

            <p>Category: {items.category}</p>

            <p>⭐ {items.rating} / 5</p>

            <p>Discount: {items.discount}%</p>

            <p>
              Stock: {items.stock > 0
                ? items.stock + " Available"
                : "Out of Stock"}
            </p>

            <button
              disabled={!items.availability}
  onClick={() => navigate(`/products/${items.id}`)}
            >
              View Details
            </button>
          </div>
        ))
      ) : (
        <h2>Products not found!</h2>
      )}
    </div>
  </>
);

}

export default Products


//  {condition ? true_data : false_data }