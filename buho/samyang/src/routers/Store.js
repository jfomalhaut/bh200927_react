import React, { useEffect } from "react";
import styled from "styled-components";
import AddStoreBtn from "../components/store/AddStoreBtn";
import AddStoreModal from "../components/store/AddStoreModal";
import EditStoreModal from "../components/store/EditStoreModal";
import Preloader from "materialize-css";
import { getDealers } from "../action/dealerAction";

import "babel-polyfill";

import M from "../../dist/materialize.min";
import StoreItem from "../components/store/StoreItem";
import DeleteStoreModal from "../components/store/DeleteStoreModal";

const Store = () => {
  const storeData = [
    {
      key: "1",
      name: "우리마트1",
      tel: "111-1111",
      address: "대구 동구 1",
      pos: "1",
    },
    {
      key: "2",
      name: "우리마트2",
      tel: "222-2222",
      address: "대구 동구 2",
      pos: "2",
    },
    {
      key: "3",
      name: "우리마트3",
      tel: "333-3333",
      address: "대구 동구 3",
      pos: "3",
    },
    {
      key: "4",
      name: "우리마트4",
      tel: "444-4444",
      address: "대구 동구 4",
      pos: "4",
    },
    {
      key: "5",
      name: "우리마트5",
      tel: "555-5555",
      address: "대구 동구 5",
      pos: "5",
    },
  ];

  return (
    <StoreContainer>
      <AddStoreBtn />
      <AddStoreModal />
      <EditStoreModal />
      <DeleteStoreModal />
      <StoreItem items={storeData} />
    </StoreContainer>
  );
};

export default Store;

const StoreContainer = styled.main``;
