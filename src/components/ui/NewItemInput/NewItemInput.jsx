import styled, { css } from "styled-components";

const NewItemInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  text-transform: uppercase;
  border: none;
  font-family: "Montserrat", serif;
  width: 400px;
  margin-left: 5px;
  background-color: beige;
  background-position: "15px 60%";
  &:focus {
    ${({ $category }) =>
      $category === "Notes" &&
      css`
        outline: 3px solid #ffd82b;
      `}
    ${({ $category }) =>
      $category === "Films" &&
      css`
        outline: 3px solid hsl(196, 83%, 75%);
      `}
  ${({ $category }) =>
      $category === "Books" &&
      css`
        outline: 3px solid hsl(106, 47%, 64%);
      `}
  }
`;

export default NewItemInput;
