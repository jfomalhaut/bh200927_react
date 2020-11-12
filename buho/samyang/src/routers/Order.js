import React, { useEffect, useState } from "react"
import Product from "../components/order/Product"

const Order = () => {
  return (
    <div>
      <Product />
      <a className='waves-effect waves-light btn'>주문하기</a>
    </div>
  )
}

export default Order
