/** @format */

import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;
    input {
      box-shadow: none;
      border: none;
      background-color: #eef3f8;
      padding: 0 8px 0 40px;
      width: 218px;
      color: rgba(0, 0, 0, 0.8);
      line-height: 1.75;
      height: 34px;
      border-color: #dc36f1;
      vertical-align: text-top;
      font-weight: 400;
      font-size: 14px;
      border-radius: 2px;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 10px;
  left: 2px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  margin: 0;
  border-radius: 0 2px 2px 0;
`;

const Nav = styled.nav`
  display: block;
  margin-left: auto;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
`;

const NavListwrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  .nav-link {
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    .nav-link {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/home">
            <img src="images/home-logo.svg" alt="Home-Logo" />
          </Link>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="images/search-icon.svg" alt="search" />
          </SearchIcon>
        </Search>

        <Nav>
          <NavListwrap>
            <NavList>
              <NavLink to="" className="nav-link">
                <img src="images/nav-home.svg" alt="" />
                <span>Home</span>
              </NavLink>
              <NavLink to="" className="nav-link">
                <img src="images/nav-network.svg" alt="" />
                <span>My Network</span>
              </NavLink>
              <NavLink to="" className="nav-link">
                <img src="images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </NavLink>
              <NavLink to="" className="nav-link">
                <img src="images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </NavLink>
              <NavLink to="" className="nav-link">
                <img src="images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </NavLink>
            </NavList>
          </NavListwrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
