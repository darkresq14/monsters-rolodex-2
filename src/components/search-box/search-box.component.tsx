// import React, { Component } from "react";
import "./search-box.styles.css";

// class SearchBox extends Component {
//   render() {
//     const { className, placeholder, onChangeHandler } = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

// import { ChangeEventHandler } from "react";
import { ChangeEvent } from 'react';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
