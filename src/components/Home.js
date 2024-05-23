/** @format */

import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = (props) => {
  const user = useSelector((state) => state.userState.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  margin-top: 10px;
`;

const Section = styled.section`
  min-height: 20px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 4fr) minmax(0, 8fr) minmax(0, 5fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-rows: auto; */
  margin: 25px 0;
  padding: 0 225px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
`;
export default Home;
