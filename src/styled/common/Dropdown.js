import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const DropdownWrapper = styled.ul`
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;

  &:active {
  }
`;

export const DropdownMenu = styled.li`
  cursor: pointer;
`;
export const DropdownLink = styled(LinkR)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #333;
`;
