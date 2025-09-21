import styled, { css } from "styled-components";

const StyledParagraph = styled.div`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px /* 32px */;
  //margin-left: 1rem /* 32px */;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 20px;

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

export default StyledParagraph;
