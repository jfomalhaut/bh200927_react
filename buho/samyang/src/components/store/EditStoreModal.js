import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useInput } from "../../customs/useInput";
import { useNumberInput } from "../../customs/userNumberInput";

import M from "materialize-css/dist/js/materialize.min.js";

const EditStoreModal = ({ editInfo = {} }) => {
  const [name, onChangeName, setName] = useInput("");
  const [telephone, onChangeTelephone, setTelephone] = useNumberInput("");
  const [address, onChangeAddress, setAddress] = useInput("");
  const [pos, onChangePos, setPos] = useNumberInput("");

  const onSubmit = () => {
    if (name === "" || telephone === "" || address === "" || pos === "") {
      M.toast({ html: "모든 항목을 채워주세요 !!" });
    } else {
      console.log(name, telephone, address, pos);
      const payload = {
        name,
        telephone,
        address,
        pos,
      };
      // Clear Fields
      setName("");
      setTelephone("");
      setAddress("");
      setPos("");
    }
  };

  useEffect(() => {
    setName(editInfo.name);
    setTelephone(editInfo.tel);
    setAddress(editInfo.address);
    setPos(editInfo.pos);
  }, [editInfo]);

  return (
    <form onSubmit={onSubmit}>
      <div id="edit-store-modal" className="modal" style={modalStyle}>
        <div className="modal-content">
          <h5 className="center">마켓 수정하기</h5>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChangeName}
              />
              <label htmlFor="message" className="active">
                마켓이름
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="telephone"
                value={telephone}
                onChange={onChangeTelephone}
              />
              <label htmlFor="message" className="active">
                전화번호
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="address"
                value={address}
                onChange={onChangeAddress}
              />
              <label htmlFor="message" className="active">
                주소
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <select
                name="pos"
                value={pos}
                className="browser-default"
                onChange={onChangePos}
              >
                <option value="" disabled>
                  POS 수량
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-green btn"
          >
            Enter
          </a>
        </div>
      </div>
    </form>
  );
};

const modalStyle = {
  width: "60%",
  height: "60%",
};

export default EditStoreModal;
