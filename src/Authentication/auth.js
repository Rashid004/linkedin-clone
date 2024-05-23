/** @format */

import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import db, { authLogin, provider, storage } from "../Firebase";
import { getArticles, setLoadingStatus } from "../reducers/articleSlice";
import { setUser } from "../reducers/userSlice";

export const signInWithGoogle = () => {
  return async (dispatch) => {
    try {
      const payload = await signInWithPopup(authLogin, provider);
      console.log(payload.user);
      dispatch(setUser(payload.user));
    } catch (err) {
      console.log(err);
    }
  };
};

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(authLogin, (user) => {
      if (user) {
        console.log(user); // Corrected: pass user directly
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
  };
}

export const signOutApi = () => {
  return async (dispatch) => {
    try {
      await signOut(authLogin);
      dispatch(setUser(null));
    } catch (err) {
      console.log(err);
    }
  };
};

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));

    if (!payload.user) {
      console.log("User information is missing.");
      dispatch(setLoadingStatus(false));
      return;
    }
    if (payload.image !== "") {
      const storageRef = storage.ref(); // Get the root reference
      const imageRef = storageRef.child(`images/${payload.image.name}`); // Create a reference to the image file

      const upload = imageRef.put(payload.image); // Upload the image

      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL(); // Get the download URL

          await db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });

          dispatch(setLoadingStatus(false));
        }
      );
    } else if (payload.video) {
      console.log(` payload video:${payload.user}`);
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoadingStatus(false));
    } else {
      dispatch(setLoadingStatus(false));
      console.log("No image or video provided");
    }
  };
}

export const getArticlesApi = () => {
  return (dispatch) => {
    let payload;
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(payload));
        console.log(payload);
      });
  };
};
