import React from "react";
import {
  Searchbox,
  SearchBtn,
  Input,
} from "components/Searchbar/SearchbarElements";

export function Searchbar() {
  return (
    <Searchbox>
      <Input type="text" placeholder="Where do you want to go?" />
      <SearchBtn>Search</SearchBtn>
    </Searchbox>
  );
}
