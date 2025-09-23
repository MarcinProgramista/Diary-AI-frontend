import styled from "styled-components";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;

  right: 100px;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
`;

export default StyledButtonIcon;
