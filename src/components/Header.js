import React from "react";
import styled from "styled-components";
import logo from "../assets/6play.png";

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-size: 2em;
  color: white;
`;

const WrapImage = styled.div`
  width: 150px;
  padding-top: 1em;
`;

const Image = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
`;

const Header = () => {
  return (
    <Menu>
      <WrapImage>
        <Image src={logo} alt="6play" />
      </WrapImage>
    </Menu>
  );
};

export default Header;
