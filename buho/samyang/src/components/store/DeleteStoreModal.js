import React from "react";

const DeleteStoreModal = () => {
  const onSubmit = () => {};
  return (
    <form onSubmit={onSubmit}>
      <div id="delete-store-modal" className="modal" style={modalStyle}>
        <div className="modal-content">
          <h5 className="center">삭제하기</h5>

          <div className="modal-footer">
            <a
              href="#!"
              onClick={onSubmit}
              className="modal-close waves-effect blue waves-green btn"
            >
              Enter
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

const modalStyle = {
  width: "60%",
  height: "60%",
};

export default DeleteStoreModal;
