/** @format */

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { signInWithGoogle } from "../Authentication/auth";

const Container = styled.div`
  padding: 0;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  font-size: 16px;
  border-radius: 25px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  padding: 10px 24px;
  transition-duration: 147ms;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  align-content: start;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  min-height: 700px;
  max-width: 1128px;
  width: 100%;
  flex-wrap: wrap;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      font-size: 20px;
      text-align: center;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    top: 50px;
    right: -150px;
    bottom: -2px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 56px;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%), inset 0 0 0 1px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0);

  font-size: 20px;
  vertical-align: middle;
  transition-duration: 167ms;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="images/login-logo.svg" alt="Linkedin-Logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="images/login-hero.svg" alt="Home_image" />
        </Hero>
        <Form>
          <Google onClick={handleSignInWithGoogle}>
            <img src="images/google.svg" alt="Google-svg" />
            Sign in with google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
