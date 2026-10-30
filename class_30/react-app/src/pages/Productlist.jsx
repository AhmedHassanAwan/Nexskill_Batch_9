
import React from 'react';
import { useParams } from 'react-router';
import ProductList from '../components/Data';
import '../styles/Productlist.css';

function Productlist() {

  const { id } = useParams();

  const data = ProductList.find(
    (items) => items.id === Number(id)
  );

  if (!data) {
    return <h2>Product Not Found!</h2>;
  }

  return (
    <div className="details-container">

      <div className="details-card">

        {/* Product Image */}
        <div className="details-image">
          <span className="discount-badge">
            {data.discount}% OFF
          </span>

          <img
            src="https://placehold.co/450x450?text=Samsung+Galaxy+A15"
            alt={data.name}
          />
        </div>

        {/* Product Information */}
        <div className="details-info">

          <p className="category">
            {data.category}
          </p>

          <h1>{data.name}</h1>

          <p className="brand">
            Brand: <strong>{data.brand}</strong>
          </p>

          <div className="rating">
            ⭐ {data.rating} / 5
            <span> | Customer Reviews</span>
          </div>

          <div className="price-section">
            <h2>Rs. {data.price.toLocaleString()}</h2>
            <del>
              Rs. {Math.round(
                data.price / (1 - data.discount / 100)
              ).toLocaleString()}
            </del>
          </div>

          <p className="discount-text">
            You save {data.discount}% on this product!
          </p>

          <div className="product-details">
            <p>
              <strong>Product ID:</strong> {data.id}
            </p>

            <p>
              <strong>Category:</strong> {data.category}
            </p>

            <p>
              <strong>Color:</strong> {data.color}
            </p>

            <p>
              <strong>Available Stock:</strong> {data.stock}
            </p>

            <p>
              <strong>Availability:</strong>
              <span className={data.availability ? "available" : "unavailable"}>
                {data.availability ? " In Stock" : " Out of Stock"}
              </span>
            </p>
          </div>

          <div className="details-buttons">
            <button
              className="cart-btn"
              disabled={!data.availability}
            >
              Add to Cart
            </button>

            <button
              className="buy-btn"
              disabled={!data.availability}
            >
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Productlist;
