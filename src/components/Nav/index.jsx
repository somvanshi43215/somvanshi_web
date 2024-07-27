import React, { useState } from "react";
import "./nav.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";

import { Link, NavLink } from "react-router-dom";
import { Box } from "@mui/material";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="title-name">Somvanshi Research Foundation</h1>
          <Box>
            <NavbarToggler onClick={toggle} />
            <Collapse
              style={{ justifyContent: "center" }}
              isOpen={isOpen}
              navbar
            >
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink
                    exact
                    to="/home"
                    activeClassName="active"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    HOME
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    ABOUT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    to="/members"
                    activeClassName="active"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    MEMBERS
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Box>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
