import React, { useState, useEffect } from "react";
import SpinnerImg from "../../../assets/Rolling.svg";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Spinner = () => {
  const [spinner, setSpinner] = useState(true);
  //   useEffect(() => {
  //     let timeout = 3000;
  //     setTimeout(() => {
  //       setSpinner(false);
  //     }, timeout);
  //   }, []);
  return <Wrapper>{spinner && <img src={SpinnerImg} />}</Wrapper>;
};

export default Spinner;
