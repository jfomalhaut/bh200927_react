import React from "react";
import { Switch } from "react-router-dom";

const Home = ({ history }) => {
  const submit = () => {
    history.push("/data/kim");
  };

  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={submit}>Data에 전송</button>
    </div>
  );
};

export default Home;
