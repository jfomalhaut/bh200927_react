import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
  Button,
  Collapse,
  Container,
  Form,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import LoginModal from "./auth/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_REQUEST } from "../redux/types";
import RegisterModal from "./auth/RegisterModal";
import logopic from "../assets/img/logo.png";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, userRole } = useSelector(
    (state) => state.auth
  );
  console.log(userRole, "UserRole");

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  useEffect(() => {
    setIsOpen(false);
  }, [user]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const addPostClick = () => {};

  const addPromotionClick = () => {};

  const authLink = (
    <Fragment>
      <NavItem>
        {userRole === "Master" ? (
          <Form className="col mt-2">
            <Link
              to="post"
              className="btn btn-success block text-white px-3"
              onClick={addPostClick}
            >
              Add Post
            </Link>
            <Link
              to="/promotion"
              className="btn btn-success block text-white px-3 ml-3"
              onClick={addPromotionClick}
            >
              Add Promotion
            </Link>
          </Form>
        ) : (
          ""
        )}
      </NavItem>
      <NavItem className="d-flex justify-content-center">
        <Form className="col mt-2">
          {user && user.user_name ? (
            <Link to="#">
              <Button outline color="light" className="px-3" block>
                <strong>{user ? `Welcome ${user.user_name}` : ""}</strong>
              </Button>
            </Link>
          ) : (
            <Button outline color="light" className="px-3" block>
              <strong>No User !!</strong>
            </Button>
          )}
        </Form>
      </NavItem>
      <NavItem>
        <Form className="col">
          <Link onClick={onLogout} to="#">
            <Button outline color="light" className="mt-2" block>
              Logout
            </Button>
          </Link>
        </Form>
      </NavItem>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            <span>
              <img style={{ width: "120px" }} src={logopic} alt="logo"></img>
            </span>
          </Link>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-flex justify-content-around" navbar>
              {isAuthenticated ? authLink : guestLink}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavbar;
