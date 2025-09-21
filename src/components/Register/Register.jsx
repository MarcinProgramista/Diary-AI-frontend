import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import API_CONFIG from "../../config/api";
import Wrapper from "../ui/Wrapper/Wrapper";
import SectionWrapper from "../ui/SectionWrapper/SectionWrapper";
import Header from "../ui/Header/Header";
import StyledHrefRegisterLogin from "../ui/StyledHrefRegisterLogin/StyledHrefRegisterLogin";
import ParagraphError from "../ui/ParagraphError/ParagraphError";
import FormWrapperRegisterLogin from "../ui/FormWrapperRegisterLogin/FormWrapperRegisterLogin";
import LabelWrapper from "../ui/LabelWrapper/LabelWrapper";
import StyledFontAwesomeIconHideName from "../ui/StyledFontAwesomeIconHideName/StyledFontAwesomeIconHideName";
import StyledFontAwesomeIconInvalidName from "../ui/StyledFontAwesomeIconInvalidName/StyledFontAwesomeIconInvalidName";
import StyledInput from "../ui/StyledInput/StyledInput";
import ParagraphUser from "../ui/ParagraphUser/ParagraphUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledFontAwesomeIconHideEmail from "../ui/StyledFontAwesomeIconHideEmail/StyledFontAwesomeIconHideEmail";
import StyledFontAwesomeIconInvalidEmail from "../ui/StyledFontAwesomeIconInvalidEmail/StyledFontAwesomeIconInvalidEmail";
import ParagraphEmail from "../ui/ParagraphEmail/ParagraphEmail";
import StyledFontAwesomeIconHidePassword from "../ui/StyledFontAwesomeIconHidePassword/StyledFontAwesomeIconHidePassword";
import StyledFontAwesomeIconInvalidPassword from "../ui/StyledFontAwesomeIconInvalidPassword/StyledFontAwesomeIconInvalidPassword";
import ParagraphPassword from "../ui/ParagraphPassword/ParagraphPassword";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const Register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setvalidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setvalidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, email, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        `${API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.REGISTER}`,
        JSON.stringify({
          name: user,
          password: pwd,
          password2: matchPwd,
          email: email,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setEmail("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <Wrapper>
      {success ? (
        <SectionWrapper>
          <Header>Success!</Header>
          <p>
            <StyledHrefRegisterLogin href="/login">
              Sign In
            </StyledHrefRegisterLogin>
          </p>
        </SectionWrapper>
      ) : (
        <SectionWrapper>
          <ParagraphError ref={errRef} $errMsg={errMsg} aria-live="assertive">
            {errMsg}
          </ParagraphError>
          <Header>Register</Header>
          <FormWrapperRegisterLogin onSubmit={handleSubmit}>
            <LabelWrapper htmlFor="username">
              Username:
              <StyledFontAwesomeIconHideName
                icon={faCheck}
                $validName={validName}
              />
              <StyledFontAwesomeIconInvalidName
                icon={faTimes}
                $validName={validName}
                $user={user}
              />
            </LabelWrapper>
            <StyledInput
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              placeholder="Put name .."
            />
            <ParagraphUser
              id="uidnote"
              $userFocus={userFocus}
              $user={user}
              $validName={validName}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </ParagraphUser>
            <LabelWrapper htmlFor="email">
              Email:
              <StyledFontAwesomeIconHideEmail
                icon={faCheck}
                $validEmail={validEmail}
              />
              <StyledFontAwesomeIconInvalidEmail
                icon={faTimes}
                $validEmail={validEmail}
                $email={email}
              />
            </LabelWrapper>
            <StyledInput
              type="email"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              placeholder="Put email .."
            />
            <ParagraphEmail
              id="uidnote"
              $emailFocus={emailFocus}
              $email={email}
              $validEmail={validEmail}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              username part of the email, allowing alphanumeric characters and
              some special characters like ., _, %, +, and -.
              <br />
              Must have "@" symbol that separates the username from the domain.
              <br />
              Must begin with a letter.
              <br />
              Domain part, allowing letters, digits, dots, and hyphens
              <br />
              top-level domain (TLD), which must consist of at least 2
              alphabetic characters.
            </ParagraphEmail>
            <LabelWrapper htmlFor="password">
              Password:
              <StyledFontAwesomeIconHidePassword
                icon={faCheck}
                $validPwd={validPwd}
              />
              <StyledFontAwesomeIconInvalidPassword
                icon={faTimes}
                $validPwd={validPwd}
                $pwd={pwd}
              />
            </LabelWrapper>
            <StyledInput
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              placeholder="Put password .."
            />
            <ParagraphPassword
              id="pwdnote"
              $pwdFocus={pwdFocus}
              $validPwd={validPwd}
            >
              {" "}
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </ParagraphPassword>
            <LabelWrapper htmlFor="confirm_pwd">Confirm Password:</LabelWrapper>
          </FormWrapperRegisterLogin>
        </SectionWrapper>
      )}
    </Wrapper>
  );
};

export default Register;
