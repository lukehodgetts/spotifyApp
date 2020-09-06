import React from "react";
import { SearchBar } from "./index.styles";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: (input: string) => void;
}

const Search: React.FC<Props> = ({ type, placeholder, value, onChange }) => {
  return (
    <SearchBar
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Search;
