import React from "react"
import { useNumberInput } from "../../customs/userNumberInput"

const ProductItem = ({ items }) => {
  const [count, onChangeCount, setCount] = useNumberInput("")
  return (
    // <div className='row'>
    //   {items.map((item, key) => (
    //     <div style={{ marginTop: "50px" }} key={key}>
    //       <label>{item.name}</label>
    //       <span>
    //         <input value={count} onChange={onChangeCount} />
    //         박스
    //       </span>

    //       <span>{item.price}원</span>
    //       <span>{item.price * count}원</span>
    //       <div className='input-field col s12 m6'>
    //         <label>{item.name}</label>
    //         <input
    //           className='col s6 m3'
    //           value={count}
    //           onChange={onChangeCount}
    //         />
    //         <span className='col s2'>박스</span>
    //         <span className='col s3'>{item.price}원</span>
    //         <span>{item.price * count}원</span>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      <table className='centered'>
        <thead>
          <tr className=' grey lighten-5 z-depth-1'>
            <th>No.</th>
            <th>제품명</th>
            <th>단가</th>
            <th>수량</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <input value={count} onChange={onChangeCount} />
              </td>
              <td>{item.price * count}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductItem
