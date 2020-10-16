import React, { useState, useEffect } from 'react';

const State = () => {
  const [count, setConunt] = useState(0);

  const increase = ({ value = 1 }) => {
    setConunt(count + value);
  };

  const decrease = () => {
    setConunt(count - 1);
  };

  //   배열에 어떤 값을 넣게 되면 com
  useEffect(() => {
    console.log('rendering count :' + count);
  }, [count]);

  useEffect(() => {
    console.log('rendering');
  }, [count]);

  return (
    <div>
      <h2>State Component</h2>
      <h1>count: {count}</h1>
      <button onClick={increase}>
        <h1>increase</h1>
      </button>
      <button onClick={() => increase({ value: 2 })}>
        <h1>increase2</h1>
      </button>
      <button onClick={() => decrease({ value: 2 })}>
        <h1>Decrease</h1>
      </button>
    </div>
  );
};

export default State;
