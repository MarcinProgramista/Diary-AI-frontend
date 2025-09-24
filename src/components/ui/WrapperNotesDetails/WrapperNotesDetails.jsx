import styled, { css } from "styled-components";

const WrapperNotesDetails = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 14%, 0.4);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  width: 95%;
  margin: 20px;
  font-family: "Dancing Script", cursive;
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

export default WrapperNotesDetails;
