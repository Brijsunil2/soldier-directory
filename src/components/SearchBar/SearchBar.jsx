import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({
  onChangeFunc,
  label = "Search Bar",
  placeholder = "Search...",
}) => {
  const [value, setValue] = useState("");

  return (
    <input
      className="search-bar"
      type="search"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChangeFunc(e.target.value);
      }}
      placeholder={placeholder}
      aria-label={label}
    />
  );
};

export default SearchBar;
