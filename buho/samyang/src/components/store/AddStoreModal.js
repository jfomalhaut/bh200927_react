import React, { useState } from "react";
import styled from "styled-components";
import { useInput } from "../../customs/useInput";
import { useNumberInput } from "../../customs/userNumberInput";

const AddStoreModal = ({ onSubmit, type }) => {
  const [name, onChangeName, setName] = useInput("");
  const [telephone, onChangeTelephone, setTelephone] = useNumberInput("");
  const [address, onChangeAddress, setAddress] = useInput("");
  const [pos, onChangePos, setPos] = useNumberInput("");

  const insert = () => {
    switch(type) {
      case 'add': {
        onSubmit(name, telephone, address, pos);
        setName("");
        setTelephone("");
        setAddress("");
        setPos("");
        break;
      }
      case 'edit': {

      }
    }
  };

  return (
    <main>
      <div id="add-store-modal" className="modal" style={modalStyle}>
        <div className="modal-content">
          <h5 className="center">마켓 등록하기</h5>
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
            onClick={() => insert(name, telephone, pos, address)}
            className="modal-close waves-effect blue waves-green btn"
          >
            Enter
          </a>
        </div>
      </div>
    </main>
  );
};

const modalStyle = {
  width: "60%",
  height: "60%",
};

export default AddStoreModal;
