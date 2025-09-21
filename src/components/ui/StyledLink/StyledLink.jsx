import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLink = styled(NavLink)`
  color: hsl(24, 5.4%, 63.9%);
  text-decoration: none;
  text-align: end;

  ${({ $category }) =>
    $category === "Notes" &&
    css`
      color: #ffd82b;
    `}
  ${({ $category }) =>
    $category === "Films" &&
    css`
      color: hsl(196, 83%, 75%);
    `}
   ${({ $category }) =>
    $category === "Books" &&
    css`
      color: hsl(106, 47%, 64%);
    `}
  font-size: 22px;
  &:focus,
  &:hover {
    text-decoration: none;
    ${({ $category }) =>
      $category === "Notes" &&
      css`
        color: #ffd82b;
      `}
    ${({ $category }) =>
      $category === "Films" &&
      css`
        color: hsl(196, 83%, 75%);
      `}
    ${({ $category }) =>
      $category === "Books" &&
      css`
        color: hsl(106, 47%, 64%);
      `}
  }
`;

export default StyledLink;
