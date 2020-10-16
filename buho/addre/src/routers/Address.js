import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const CONFIRM_KEY = process.env.CONFIRM_KEY;
const REQUEST_URL = process.env.REQUEST_URL;
const VIEW = 10;

console.log(CONFIRM_KEY, REQUEST_URL);

const Address = () => {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeKeyword = (ev) => {
    const {
      target: { value },
    } = ev;
    setKeyword(value);
  };

  const search = () => {
    const payload = {
      confmKey: CONFIRM_KEY,
      currentPage,
      countPerPage: VIEW,
      keyword,
      resultType: "json",
    };

    Axios.get(
      `${REQUEST_URL}?confmKey=${CONFIRM_KEY}&currentPage=${currentPage}&countPerPage=${VIEW}&resultType=json&keyword=${keyword}`
    )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("done");
      });
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    search();
  };

  return (
    <Form>
      <input
        value={keyword}
        onChange={onChangeKeyword}
        placeholder="주소를 입력하세요"
      />
      <button>검색</button>
      <ul>{}</ul>
    </Form>
  );
};

export default Address;

const Form = styled.form``;
