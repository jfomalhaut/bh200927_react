import React from "react";
import { Col, Row } from "reactstrap";

const Header = () => {
  return (
    <div id="page-header" className="mb-3">
      <Row>
        <Col md="6" sm="auto" className="text-center m-auto">
          <h1>SamYang CRM</h1>
          <p>삼양식품(주) CRM Project 입니다 !!!</p>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
