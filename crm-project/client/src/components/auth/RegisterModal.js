import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_ERROR_REQUEST, REGISTER_REQUEST } from "../../redux/types";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  NavLink,
} from "reactstrap";

const RegisterModal = () => {
  const [modal, setModal] = useState(false);
  const [form, setValue] = useState({
    branch_name: "",
    store_name: "",
    user_name: "",
    user_id: "",
    password: "",
  });

  const [localMsg, setLocalMsg] = useState("");
  const { errorMsg } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch({
      type: CLEAR_ERROR_REQUEST,
    });
    setModal(!modal);
  };

  useEffect(() => {
    try {
      setLocalMsg(errorMsg);
    } catch (e) {
      console.error(e);
    }
  }, [errorMsg]);

  const onChange = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { branch_name, store_name, user_name, user_id, password } = form;
    const newUser = { branch_name, store_name, user_name, user_id, password };
    console.log(newUser, "newUser");

    dispatch({
      type: REGISTER_REQUEST,
      payload: newUser,
    });
  };

  return (
    <div>
      <NavLink className="text-white" onClick={handleToggle} href="#">
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Register</ModalHeader>
        <ModalBody>
          {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="branch_name">지점명</Label>
              <Input
                type="text"
                name="branch_name"
                id="branch_name"
                placeholder="지점명"
                onChange={onChange}
              />
              <Label for="store_name">점포명</Label>
              <Input
                type="text"
                name="store_name"
                id="store_name"
                placeholder="점포명"
                onChange={onChange}
              />
              <Label for="user_name">성명</Label>
              <Input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="이름"
                onChange={onChange}
              />
              <Label for="user_id">아이디</Label>
              <Input
                type="text"
                name="user_id"
                id="user_id"
                placeholder="아이디"
                onChange={onChange}
              />
              <Label for="password">패스워드</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="패스워드"
                onChange={onChange}
              />
              <Button color="dark" className="mt-2" block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RegisterModal;
