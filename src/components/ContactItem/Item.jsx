// import React, { Component } from "react";
import PropTypes from "prop-types";
import { Item } from "./CSSContactItem";

const ContactItem = ({ name, number, onDeleteContact, id }) => {
  const handleDelete = () => onDeleteContact(id);
  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.node.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
