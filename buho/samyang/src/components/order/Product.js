import React, { useState } from "react"

import ProductItem from "./ProductItem"

const DATA = [
  { id: 1, name: "삼양라면1", price: 1850 },
  { id: 2, name: "삼양라면2", price: 2850 },
  { id: 3, name: "삼양라면3", price: 3850 },
  { id: 4, name: "삼양라면4", price: 4850 },
  { id: 5, name: "삼양라면5", price: 5850, count: 1 },
]

const Product = () => {
  const [product, setProduct] = useState(DATA)

  return <ProductItem items={DATA} key={DATA.id} />
}

export default Product
