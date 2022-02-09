import React, { useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchChangeValue = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      placeholder="Type here to search..."
      className="inputSearch"
      value={searchValue}
      onChange={onSearchChangeValue}
    />
  );
};

export { TodoSearch };
