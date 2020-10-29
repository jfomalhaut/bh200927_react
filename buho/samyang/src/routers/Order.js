import React, { useEffect, useState } from "react";

const DATA = [
  { id: 1, name: '삼양라면1', price: 1850 },
  { id: 2, name: '삼양라면2', price: 2850 },
  { id: 3, name: '삼양라면3', price: 3850 },
  { id: 4, name: '삼양라면4', price: 4850 },
  { id: 5, name: '삼양라면5', price: 5850, count: 1 },
];

const Order = () => {
  const [product, setProduct] = useState(DATA);

  useEffect(() => {

  }, [product]);
  return (
    <div>
      {product.map(item => (
        <Product item={item} />
      ))}
    </div>
  );
};

export default Order;
