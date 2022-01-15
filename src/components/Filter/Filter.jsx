// import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FilterContainer } from "./CSSFilter";

const Filter = ({ filter, onChange }) => {
  const filterId = nanoid();

  // const { filter, onChange } = this.props;
  return (
    <FilterContainer>
      <label htmlFor={filterId}>
        Find contacts by name
        <input type="text" value={filter} id={filterId} onChange={onChange} />
      </label>
    </FilterContainer>
  );
};

// Filter.defaultProps = {
//   filter: "",
// };
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
