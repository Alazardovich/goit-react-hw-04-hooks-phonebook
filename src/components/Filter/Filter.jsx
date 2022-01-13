import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FilterContainer } from "./CSSFilter";

class Filter extends Component {
  filterId = nanoid();
  render() {
    const { filter, onChange } = this.props;
    return (
      <FilterContainer>
        <label htmlFor={this.filterId}>
          Find contacts by name
          <input
            type="text"
            value={filter}
            id={this.filterId}
            onChange={onChange}
          />
        </label>
      </FilterContainer>
    );
  }
}
Filter.defaultProps = {
  filter: "",
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
