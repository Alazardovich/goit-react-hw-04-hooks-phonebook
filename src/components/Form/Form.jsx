import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FormList } from "./CSSForm";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nanoIdName = nanoid();
  nanoIdTel = nanoid();

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <FormList onSubmit={this.handleSubmit} autoComplete="off">
        <label htmlFor={this.nanoIdName}>Name</label>
        <input
          id={this.nanoIdName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
        />

        <label htmlFor={this.nanoIdTel}>Number</label>
        <input
          id={this.nanoIdTel}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInputChange}
        />
        <button type="submit">Add contact</button>
      </FormList>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
