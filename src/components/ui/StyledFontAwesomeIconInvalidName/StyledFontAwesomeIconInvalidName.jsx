import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFontAwesomeIconInvalidName = styled(FontAwesomeIcon)`
  display: ${({ $validName, $user }) => ($validName || !$user ? "none" : "")};
  color: ${({ $validName, $user }) => ($validName || !$user ? "" : "red")};
  margin-left: ${({ $validName, $user }) =>
    $validName || !$user ? "0.25rem" : ""};
`;

export default StyledFontAwesomeIconInvalidName;
