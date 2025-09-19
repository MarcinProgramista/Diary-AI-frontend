import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: wheat;
  margin-bottom: 5px;
  margin: 10px;
  height: 47px;
  color: black;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  width: ${({ $small }) => ($small ? "200px" : "300px")};

  ${({ $login }) =>
    $login &&
    css`
      background-color: hsl(106, 47%, 64%);
    `}
`;

export default Button;
