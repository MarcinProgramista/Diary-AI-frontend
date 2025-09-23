import styled, { css } from "styled-components";

const WrapperNewNoteItem = styled.div`
  //border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 10px 100px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: hsl(0, 0%, 10%);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);

  transform: translate(${({ $buttonShown }) => ($buttonShown ? "0" : "100%")});
  transition: transform 0.25 ease-in-out;

  ${({ $category }) =>
    $category === "Notes" &&
    css`
      border-left: 10px solid #ffd82b;
    `}
  ${({ $category }) =>
    $category === "Films" &&
    css`
      border-left: 10px solid hsl(196, 83%, 75%);
    `}
    ${({ $category }) =>
    $category === "Books" &&
    css`
      border-left: 10px solid hsl(106, 47%, 64%);
    `};
`;

export default WrapperNewNoteItem;
