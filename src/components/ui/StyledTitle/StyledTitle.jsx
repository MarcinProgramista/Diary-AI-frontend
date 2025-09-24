import styled, { css } from "styled-components";

const StyledTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: hsl(0, 0%, 10%);
  text-transform: uppercase;
  text-align: start;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  //height: 50px;
  font-family: "Dancing Script", cursive;
  background-color: hsl(0, 0%, 10%);
  //margin-bottom: 1px;

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

    ${({ $datails, $category }) =>
    $datails &&
    $category === "Notes" &&
    css`
      background-color: #ffd82b;
      color: hsl(0, 0%, 10%);
    `}
  ${({ $datails, $category }) =>
    $datails &&
    $category === "Films" &&
    css`
      background-color: hsl(196, 83%, 75%);
      color: hsl(0, 0%, 10%);
    `}
  ${({ $datails, $category }) =>
    $datails &&
    $category === "Books" &&
    css`
      background-color: hsl(106, 47%, 64%);
      color: hsl(0, 0%, 10%);
    `}
`;

export default StyledTitle;
