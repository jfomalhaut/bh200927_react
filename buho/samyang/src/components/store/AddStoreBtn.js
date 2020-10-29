import React from "react";

const AddStoreBtn = () => {
  return (
    <div
      className="center s"
      style={{ marginTop: "2rem", marginBottom: "3rem" }}
    >
      <a
        href="#add-store-modal"
        className="btn-floating btn-large orange darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
    </div>
  );
};

export default AddStoreBtn;
