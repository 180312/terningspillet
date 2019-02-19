import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const ModalView = props => {
  return (
    <Modal
      title="The winner is: "
      content={props.winner.name}
      actions={
        <Link to="/" className="ui button">
          Cancel
        </Link>
      }
    />
  );
};

export default ModalView;
