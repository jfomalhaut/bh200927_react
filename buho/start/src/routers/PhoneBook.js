import React, { useState } from "react";

const PhoneBook = () => {
  const useInput = (initialValue) => {
    const [val, setVal] = useState(initialValue);
    const onChange = (ev) => {
      const {
        target: { value },
      } = ev;
      setVal(value);
    };
    return [val, onChange, setVal];
  };

  const [id, onChangeId, setId] = useInput("");
  const [username, onChangeUserName, setUsername] = useInput("");
  const [phonenumber, onChangePhoneNumber, setPhoneNumber] = useInput("");
  const [companyname, onChangeCompanyname, setCompanyname] = useInput("");
  const [list, setList] = useState([]);

  const onInsert = () => {
    const obj = [
      {
        id: id,
        username: username,
        phonenumber: phonenumber,
        companyname: companyname,
      },
    ];
    console.log(obj);
    const newArr = list.concat(obj);
    setList(newArr);
    console.log(newArr);
    setUsername("");
    setPhoneNumber("");
    setCompanyname("");
    setId("");
  };

  return (
    <>
      <label>아이디</label>
      <input value={id} onChange={onChangeId} />
      <br />
      <label>이름</label>
      <input value={username} onChange={onChangeUserName} />
      <br />
      <label>전화번호</label>
      <input value={phonenumber} onChange={onChangePhoneNumber} />
      <br />
      <label>회사이름</label>
      <input value={companyname} onChange={onChangeCompanyname} />
      <br />
      <button onClick={onInsert}>입력</button>
      <ul>
        {list.map((item, index) => (
          <li key={`PHONE_BOOK${index}`}>
            이름:{item.username} | 주소:{item.phonenumber} | 회사이름:
            {item.companyname}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhoneBook;
