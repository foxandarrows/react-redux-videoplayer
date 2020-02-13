import React from "react";
import styled from "styled-components";
import logo from "../assets/6play.png";

const Menu = styled.div`
  font-size: 2em;
  color: white;
`;

const Image = styled.img`
  width: 4em;
  padding: 1em 0 1em 0;
`;

const Header = () => {
  return (
    <Menu>
      <Image src={logo} alt="6play" />
    </Menu>
  );
};

export default Header;
