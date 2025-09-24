import styled, { css } from "styled-components";

const StyledCommentNotes = styled.i`
  max-width: 700px;
  position: relative;
  left: 0px;
  font-size: 2.8rem;
  color: #242424;

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
`;

export default StyledCommentNotes;
