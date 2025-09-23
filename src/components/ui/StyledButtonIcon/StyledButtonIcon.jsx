import styled, { css } from "styled-components";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;

  right: 100px;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;

  ${({ $category }) =>
    $category === "Books" &&
    css`
      background-color: hsl(106, 47%, 64%);
    `}
  ${({ $category }) =>
    $category === "Notes" &&
    css`
      background-color: #ffd82b;
    `}
    ${({ $category }) =>
    $category === "Films" &&
    css`
      background-color: hsl(196, 83%, 75%);
    `}
`;

export default StyledButtonIcon;
