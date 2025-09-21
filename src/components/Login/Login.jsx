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
import StyledSpanRegisterLogin from "../ui/StyledSpanRegisterLogin/StyledSpanRegisterLogin";
import StyledHrefRegisterLogin from "../ui/StyledHrefRegisterLogin/StyledHrefRegisterLogin";
import Button from "../ui/Button/Button";
import API_CONFIG from "../../config/api";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.LOGIN}`,
        JSON.stringify({
          email: email,
          password: pwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          signal: controller.signal,
        }
      );
      //console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;

      //const roles = response?.data?.roles;
      //   console.log(roles);
      setId(JSON.stringify(response?.data.user_id));
      setAuth({
        id: JSON.stringify(response?.data.user_id),
        email,
        pwd,
        accessToken,
      });
      setEmail("");
      setPwd("");
      controller.abort();
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        console.log(err);

        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <Wrapper>
      <SectionWrapper>
        <ParagraphError ref={errRef} $errMsg={errMsg} aria-live="assertive">
          {errMsg}
        </ParagraphError>
        <Header>Log in</Header>
        <WrapperSeparator />
        <FormWrapperRegisterLogin onSubmit={handleSubmit}>
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
          <LabelWrapper htmlFor="password">Password:</LabelWrapper>
          <StyledInput
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            placeholder="put password"
          />
          <Button>Log in</Button>
        </FormWrapperRegisterLogin>
        <p>
          Need account?
          <br />
          <StyledSpanRegisterLogin className="line">
            {/*put router link here*/}
            <StyledHrefRegisterLogin href="/register">
              Register
            </StyledHrefRegisterLogin>
          </StyledSpanRegisterLogin>
        </p>
      </SectionWrapper>
    </Wrapper>
  );
};

export default Login;
