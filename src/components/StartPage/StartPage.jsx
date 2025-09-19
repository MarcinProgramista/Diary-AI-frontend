import React from "react";
import styled, { css } from "styled-components";
import StyledButtonRegisterLogin from "../Button/Button";
import Button from "../Button/Button";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Quote = styled.div`
  font-style: italic;
  font-size: 1.6em;
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;
const Intro = styled.div`
  margin-top: px;
  font-size: 1.6em;
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;
const Header = styled.h1`
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  font-size: 40px;
`;
const StartPage = () => {
  return (
    <Wrapper>
      <Header>My Digital Diary</Header>
      <Quote>
        <p>
          "The journey of a thousand miles begins with a single step." - Lao Tzu
        </p>
      </Quote>

      <Intro>
        <p>
          Welcome to my diary! This is a space to record my thoughts, feelings,
          and experiences.
        </p>
      </Intro>
      <img
        src={
          "https://cdn.shopify.com/s/files/1/0371/1575/6676/files/1.2_b4a078d2-f890-4623-8685-158ad6f93c7f_800x.jpg?v=1704774859"
        }
      />
      <a href="/register">
        <Button>Reigister</Button>
      </a>
      <a href="/login">
        <Button $login>Log in</Button>
      </a>
      {/* <a href="/register">Register</a> */}
    </Wrapper>
  );
};

export default StartPage;
