import React from 'react';
import { Link } from 'react-router-dom';

const Navigation2 = () => {
  return (
    <ul>
      <li>
        <Link to="items1">Items1</Link>
      </li>
      <li>
        <Link to="items2">Items2</Link>
      </li>
      <li>
        <Link to="items3">Items3</Link>
      </li>
    </ul>
  );
};

export default Navigation2;
