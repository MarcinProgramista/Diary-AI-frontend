import styled, { css } from "styled-components";

const StyledCategory = styled.span`
  text-decoration: "";
  font-weight: 600;
  font-size: 22px;
  background-color: "";
  margin: 5px;
  padding: 10px;
  border-radius: 25px;

  ${({ $active, $category }) =>
    $active &&
    $category === "Notes" &&
    css`
      color: black;
      text-decoration: "underline";
      font-size: 24px;
      background-color: #ffd82b;
    `}
  ${({ $active, $category }) =>
    $active &&
    $category === "Books" &&
    css`
      color: black;
      text-decoration: "underline";
      font-size: 24px;
      background-color: hsl(106, 47%, 64%);
      background-image: url(${({ $icon }) => $icon});
      background-size: 40%;
      background-repeat: no-repeat;
    `}
    ${({ $active, $category }) =>
    $active &&
    $category === "Films" &&
    css`
      color: black;
      text-decoration: "underline";
      font-size: 24px;
      background-color: hsl(196, 83%, 75%);
    `};
  ${({ $active, $category }) =>
    $active &&
    $category === "Home" &&
    css`
      color: black;
      text-decoration: "underline";
      font-size: 24px;
      background-color: #ffd82b;
    `};
`;

export default StyledCategory;
