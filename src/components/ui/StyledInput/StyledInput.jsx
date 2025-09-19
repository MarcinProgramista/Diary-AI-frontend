import styled from "styled-components";

const StyledInput = styled.input`
  margin-top: 1rem;
  font-family: "Nunito", sans-serif;

  //font-size: 22px;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  height: 30px;
  width: 100%;
  border: 2px solid hsl(39, 89%, 67%);
  border-width: 0px;
  background: hsl(0, 0%, 20%);
  color: #fff;
  font-size: 16px;
  line-height: 1.25rem /* 20px */;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px hsl(39, 89%, 67%);
    background: hsl(0, 0%, 20%);
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  &::placeholder {
    color: hsl(39, 89%, 67%);
  }
`;

export default StyledInput;
