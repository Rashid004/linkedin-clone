/** @format */

import styled from "styled-components";

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
  font-size: 18px;
  text-decoration: none;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="images/login-logo.svg" alt="Linkedin-Logo" />
        </a>
        <Join>Join now</Join>
      </Nav>
    </Container>
  );
};

export default Login;
