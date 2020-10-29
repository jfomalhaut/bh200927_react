import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const StoreItem = ({ items }) => {
  return (
    <div>
      <table className="centered">
        <thead>
          <tr className=" grey lighten-5 z-depth-1">
            <th>No.</th>
            <th>마트명</th>
            <th>주소</th>
            <th>전화번호</th>
            <th>POS 수</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.tel}</td>
              <td>{item.pos}</td>
              <td className="center">
                <a
                  href="#!"
                  className="secondary-content modal-trigger"
                  href="#edit-store-modal"
                >
                  <i className="material-icons grey-text">border_color</i>
                </a>
              </td>
              <td className="center">
                <a
                  href="#!"
                  className="secondary-content modal-trigger"
                  href="#delete-store-modal"
                >
                  <i className="material-icons grey-text">delete</i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        {list.map((item) => (
          <article>
            <div>매장명: {item.name}</div>
            <div>전화번호: {item.tel}</div>
            <div>주소: {item.address}</div>
            <div>POS: {item.pos}</div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default StoreItem;
