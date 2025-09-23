import styled, { css } from "styled-components";

const StyledAvatar = styled.img`
  width: 300px;
  height: 350px;
  box-shadow: 0 10px 30px -10px 3px solid #ffd82b; //hsl(60, 9.1%, 97.8%);
  border-radius: 25px;
  position: relative;
  text-align: left;

  margin-bottom: 10px;
  ${({ $category }) =>
    $category === "Notes" &&
    css`
      box-shadow: 0 10px 30px -10px #ffd82b;
    `}
  ${({ $category }) =>
    $category === "Films" &&
    css`
      box-shadow: 0 10px 30px -10px hsl(196, 83%, 75%);
    `}
  ${({ $category }) =>
    $category === "Books" &&
    css`
      box-shadow: 0 10px 30px -10px hsl(106, 47%, 64%);
    `}
`;

export default StyledAvatar;
