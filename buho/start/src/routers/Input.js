import React, { useState } from 'react';

const TEMp = [{ name: '홍길동' }, { name: '김철수' }, { name: '기민수' }];

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

const Input = () => {
  const [data, onChangeData] = useInput('');
  const [name, onChangeName, setName] = useInput('');
  const [list, setList] = useState([]);

  const onInsert = () => {
    const obj = { name: name };
    console.log(obj);
    const newArr = list.concat(obj);
    setList(newArr);
    console.log(newArr);
    setName('');
  };

  return (
    <div>
      {/* <input value={data} onChange={onChangeData} /> */}
      <input value={name} onChange={onChangeName} />
      {/* <h1>{data}</h1>
      <h1>{name}</h1> */}
      <button onClick={onInsert}>입력</button>
      <ul>
        {list.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Input;
