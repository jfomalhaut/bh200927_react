import React from 'react';

const Home = ({ match, history }) => {
  console.log(history);
  const submit = () => {
    history.push('/data/kim');
  };

  const submit2 = () => {
    history.push('/items1');
  };

  const submit3 = () => {
    history.push('/items2');
  };
  const submit4 = () => {
    history.push('/items3');
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={submit}>Data에 전송</button>
      <button onClick={submit2}>Items1</button>
      <button onClick={submit3}>Items2</button>
      <button onClick={submit4}>Items3</button>
    </div>
  );
};

export default Home;
