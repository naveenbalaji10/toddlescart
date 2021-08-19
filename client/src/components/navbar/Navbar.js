import React from "react";
import { Icon } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
import SearchBar from "../searchbar/SearchBar";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <Menu pointing inverted color="blue" className="navmenu" fluid>
          <Menu.Header as="h3" className="menu-header">
            <Icon
              name="shopping bag"
              inverted
              size="small"
              className="nav-icon"
            />
            ToddlesCart
          </Menu.Header>

          <Menu.Menu position="right" className="menuitem">
            <Menu.Item href="/" className="menu-items">
              <Icon name="home" inverted />
            </Menu.Item>
            <Menu.Item href="cart" className="menu-items">
              <Icon name="shopping cart" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <SearchBar />
      </div>
    </React.Fragment>
  );
};
export default Navbar;
