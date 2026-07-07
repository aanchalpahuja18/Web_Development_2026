import React from 'react'
import "./ProductCard.css"

const ProductCard = ({image, name, category, price, rating, inStock}) => {
  return (
    <div className='card'>
      <img src={image} alt={name}  className='product-img'/>
      <h1 className='product-name'>{name}</h1>
      <h3 className='product-category'>{category}</h3>
      <p className='product-price'>Rs. {price}</p>
      <p className='product-rating'>⭐ {rating}</p>
      <button disabled = {!inStock} className='btn'>{inStock ? "Buy Now" : "Out of Stock"}</button>
    </div>
  )
}

export default ProductCard
