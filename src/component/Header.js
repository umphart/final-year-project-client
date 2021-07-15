import React, { useState } from 'react';
import Buktext from "./Buktext"
import Buklogo from "./buklogo"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
    
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavbarText><Buktext/></NavbarText>
           
          </Nav>
          <NavbarText><Buklogo/></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;