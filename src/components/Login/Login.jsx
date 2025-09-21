import { useState, useEffect, useCallback, useRef } from "react";
import Wrapper from "../ui/Wrapper/Wrapper";
import SectionWrapper from "../ui/SectionWrapper/SectionWrapper";
import ParagraphError from "../ui/ParagraphError/ParagraphError";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../ui/Header/Header";
import WrapperSeparator from "../ui/WrapperSeparator/WrapperSeparator";
import FormWrapperRegisterLogin from "../ui/FormWrapperRegisterLogin/FormWrapperRegisterLogin";
import LabelWrapper from "../ui/LabelWrapper/LabelWrapper";
import StyledInput from "../ui/StyledInput/StyledInput";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const controller = new AbortController();

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  return (
    <Wrapper>
      <SectionWrapper>
        <ParagraphError ref={errRef} $errMsg={errMsg} aria-live="assertive">
          {errMsg}
        </ParagraphError>
        <Header>Log in</Header>
        <WrapperSeparator />
        <FormWrapperRegisterLogin>
          <LabelWrapper htmlFor="email">Email:</LabelWrapper>
          <StyledInput
            type="email"
            id="email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="name@example.com"
          />
        </FormWrapperRegisterLogin>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Login;
