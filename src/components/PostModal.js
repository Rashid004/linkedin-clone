/** @format */

import { useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { postArticleAPI } from "../actions/auth";
import { Timestamp } from "firebase/firestore";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: black;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 90%;
  background-color: white;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 46px;
    width: 46px;
    min-width: auto;
    border: none;
    outline: none;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.15);
    img {
      pointer-events: none;
    }
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
`;
const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    img {
      margin-right: 5px;
    }
  }
`;
const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(user) => (user.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  color: ${(user) => (user.disabled ? "rgba(1,1,1,0.2)" : "white")};
  &:hover {
    background: ${(user) => (user.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

function PostModal({ handleClick, showModel }) {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const handleReset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    handleClick(e);
  };

  const handlePostArticle = (e) => {
    console.log("post malon");
    console.log(user);
    e.preventDefault();
    console.log("post malon2 ");
    if (!user) {
      console.error("User object is undefined");
      return;
    }
    if (e.target !== e.currentTarget) {
      console.log("marlin");
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: Timestamp.now(),
    };
    dispatch(postArticleAPI(payload));
    handleReset(e);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      alert("No file selected");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert(`File is not an image, the file is a ${file.type}`);
      return;
    }
    setShareImage(file);
  };

  if (!user) return null;

  return (
    <>
      {showModel && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={handleReset}>
                <img src="/images/close-icon.png" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{user.displayName || "Guest"}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(event) => setEditorText(event.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif, image/png, image/jpg"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>

                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="" />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        type="text"
                        value={videoLink}
                        placeholder="Please input a video link"
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea("image")}>
                  <img src="/images/share-img.png" alt="" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea("media")}>
                  <img src="/images/share-video.png" alt="" />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/share-comment1.png" alt="comment" />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton disabled={!editorText} onClick={handlePostArticle}>
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
}

export default PostModal;
