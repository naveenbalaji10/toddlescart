import React from "react";
import { Icon } from "semantic-ui-react";
import { Input } from "semantic-ui-react";

export default function SearchBar() {
  return (
    <div className="searchbar ">
      <Input icon placeholder="search" color="blue" className="searchinput">
        <input />
        <Icon name="search" />
      </Input>
    </div>
  );
}
