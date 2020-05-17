import React from "react";

function SearchForm(props) {
  return (
    <div className="form-group">
        <label htmlFor="firstName">Sear
        ch by first name</label>
        <input className="form-control"
            value={props.firstName}
            name="firstName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="First Name"
        />
        <label forhtml="sort">Sort Employees By Ascending or Descending Birth Month</label>
        <select 
        onChange={props.handleSelectChange}
        id="sort">
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
        </select>
    </div>
)
}

export default SearchForm;
