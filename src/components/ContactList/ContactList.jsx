import React, { Component } from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem/Item";
import { ListContainer } from "./CSSContactList";

class ContactList extends Component {
  render() {
    const { onHandleFilter, onDeleteContact } = this.props;
    return (
      <ListContainer>
        {onHandleFilter.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ListContainer>
    );
  }
}
ContactList.propTypes = {
  onHandleFilter: PropTypes.arrayOf(
    PropTypes.shape({id:PropTypes.string.isRequired})
    ),
    onDeleteContact: PropTypes.func.isRequired,
}
export default ContactList;
