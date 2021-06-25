import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {Dropdown } from " dropdown";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "../../styled/common/Navbar";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Navbar = ({ toggle }) => {
  const options = [
    { key: 1, text: "Choice 1", value: "/choice1" },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];
  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to="/">Logo Here</NavbarLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLinks to="/dashboard">Dashboard</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>
              {/* <Dropdown
                className="pr-2 custom-dropdown"
                options={this.state.dropdownOptions}
                onChange={this.updateDashboard}
                value={this.state.selectedValue}
                placeholder="Topics"
              /> */}
              <Dropdown text="Topics" options={options} simple item />
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/data-used">Data Used</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
