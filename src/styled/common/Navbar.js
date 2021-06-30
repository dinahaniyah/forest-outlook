import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  z-index: 100;
  /* padding: 1rem; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
`;

export const NavbarLogo = styled(LinkR)`
  color: #333;
  font-weight: 600;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 24px;
`;

export const NavbarMenu = styled.div`
  width: 300px;
  border: 1px solid #333;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: #333;
`;
