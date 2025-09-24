import styled, { css } from "styled-components";

const InnerWrapperNotesDetails = styled.div`
  position: relative;
  padding: 17px 30px;

  border-radius: 20px;

  :first-of-type {
    z-index: 999;
  }
  ${({ $flex }) =>
    $flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: black;
    `}
  ${({ $row }) =>
    $row &&
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      //justify-content: space-between;
      gap: 6rem /* 32px */;
      padding-left: 2rem /* 32px */;
      padding-right: 2rem /* 32px */;
      padding-top: 1rem /* 16px */;
      padding-bottom: 1rem /* 16px */;
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
  ${({ $category }) =>
    $category === "Books" &&
    css`
      background-color: hsl(106, 47%, 64%);
    `}
`;

export default InnerWrapperNotesDetails;
