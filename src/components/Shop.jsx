import React from 'react'

const productData = [
    {
        id: 1,
        title: "Spin Earrings",
        price: 10.00,
        image: 'wkdayearrings.png',
    },
    {
        id: 2,
        title: "Double Layer Long Sleeve",
        price: 29.00,
        image: 'wkdaytop.png',
    },
    {
        id: 3,
        title: "Vanna Off Shoulder Zip Cardigan",
        price: 59.00,
        image: 'wkdaycardigan.png',
    },
    {
        id: 4,
        title: "Rail Mid Loose Coated Jeans",
        price: 57.00,
        image: 'wkdayjeans.png',
    },
    {
        id: 5,
        title: "Kylie Denim Shoulder Bag",
        price: 39.00,
        image: 'wkdaybag.png',
    },
]

export const Shop = () => {
  return (
    <div className='productContainer'>
      {productData.map((product) => (
        <div key={product.id} className="productCard">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

