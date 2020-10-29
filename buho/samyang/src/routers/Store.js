import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddStoreBtn from "../components/store/AddStoreBtn";
import AddStoreModal from "../components/store/AddStoreModal";
import EditStoreModal from "../components/store/EditStoreModal";
import M from "../../dist/materialize.min";
import StoreItem from "../components/store/StoreItem";
import DeleteStoreModal from "../components/store/DeleteStoreModal";

const STORE_DATA = [
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

const Store = () => {
  const [storeData, setStoreData] = useState(STORE_DATA);
  const [editInfo, setEditInfo] = useState({});

  const add = (name, telephone, pos, address) => {
    if (name === "" || telephone === "" || address === "" || pos === "") {
      M.toast({ html: "모든 항목을 채워주세요 !!" });
    } else {
      console.log(name, telephone, address, pos);
      const payload = {
        name,
        tel: telephone,
        address,
        pos,
      };

      const newList = storeData.concat(payload);
      setStoreData(newList);
    }
  };

  const edit = () => {
    console.log('수정하기');
  };

  useEffect(() => {
    // console.log(editInfo);
  }, [editInfo]);

  return (
    <StoreContainer>
      <AddStoreBtn />
      <AddStoreModal onSubmit={add} type={'add'}/>
      {/* <AddStoreModal onSubmit={edit} type={'edit'}/> */}
      <EditStoreModal editInfo={editInfo} edit={edit} onSubmit={edit} />
      <DeleteStoreModal />
      <StoreItem items={storeData} setEditInfo={setEditInfo}  />
    </StoreContainer>
  );
};

export default Store;

const StoreContainer = styled.main``;
