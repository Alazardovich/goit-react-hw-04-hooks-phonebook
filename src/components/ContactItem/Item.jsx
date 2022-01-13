import React, { Component } from "react";
import PropTypes from "prop-types";
import { Item } from "./CSSContactItem";

class ContactItem extends Component {
  render() {
    const { name, number, onDeleteContact, id } = this.props;
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
  }
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.node.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
