import styled, { css } from "styled-components";
import Button from "../Button/Button";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Quote from "./Quote";
import Intro from "./Intro";
import Img from "./Img";

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
      <Img
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
    </Wrapper>
  );
};

export default StartPage;
