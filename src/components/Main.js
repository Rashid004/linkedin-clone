/** @format */

import styled from "styled-components";
import PostModal from "./PostModal";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getArticlesApi } from "../Authentication/auth";
import ReactPlayer from "react-player";

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  text-align: center;
  border-radius: 8px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 /10%), 0 0 0 1px rgba(0 0 0 /15%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      display: flex;
      align-items: center;
      font-weight: 600;
      border: none;
      outline: none;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
        cursor: pointer;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      margin-top: 4px;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  background-color: white;
  border: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
    }
  }
`;

const SocialAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: white;
    @media (min-width: 768px) {
      margin-left: 8px;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

function Main() {
  const [showModel, setShowModel] = useState(false);
  const user = useSelector((state) => state.userState.user);
  const loading = useSelector((state) => state.userArticleState.loading);
  const articles = useSelector((state) => state.userArticleState.articles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesApi());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();

    setShowModel((prev) => !prev);
  };
  return (
    <>
      {articles.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {user && user.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button onClick={handleClick} disabled={loading ? true : false}>
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src="/images/photo-icon.svg" alt="" />
                <span>Photo</span>
              </button>
              <button>
                <img src="/images/video-icon.svg" alt="" />
                <span>Video</span>
              </button>
              <button>
                <img src="/images/event-icon.svg" alt="" />
                <span>Event</span>
              </button>
              <button>
                <img src="/images/article-icon.svg" alt="" />
                <span>Write artical</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {loading && <img src="/images/loading-spinner.svg" alt="" />}

            {articles.length > 0 &&
              articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" alt="" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImage>
                    <a>
                      {!article.sharedImg && article.video ? (
                        <ReactPlayer width={"100%"} url={article.video} />
                      ) : (
                        article.sharedImg && (
                          <img src={article.sharedImg} alt="" />
                        )
                      )}
                    </a>
                  </SharedImage>
                  <SocialCounts>
                    <li>
                      <button>
                        <img
                          src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                          alt=""
                        />
                        <img
                          src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                          alt=""
                        />
                        <span>75</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments}</a>
                    </li>
                  </SocialCounts>

                  <SocialAction>
                    <button>
                      <img src="/images/like-icon.png" alt="" />
                      <span>Likes</span>
                    </button>
                    <button>
                      <img src="/images/comments-icon.png" alt="" />
                      <span>Likes</span>
                    </button>
                    <button>
                      <img src="/images/share-icon.png" alt="" />
                      <span>Likes</span>
                    </button>
                    <button>
                      <img src="/images/send-icon.png" alt="" />
                      <span>Likes</span>
                    </button>
                  </SocialAction>
                </Article>
              ))}
          </Content>

          <PostModal showModel={showModel} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
}

export default Main;
