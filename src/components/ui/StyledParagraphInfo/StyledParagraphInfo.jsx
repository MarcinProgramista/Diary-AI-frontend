import styled from "styled-components";

const StyledParagraphInfo = styled.p`
  font-size: 17px;
  text-align: center;
  margin-bottom: 700px;

  //margin-left: 1rem /* 32px */;
  margin-bottom: 10px;

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

export default StyledParagraphInfo;
