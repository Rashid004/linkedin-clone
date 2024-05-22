/** @format */

import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import db, { auth, provider, storage } from "../firebase";
import { setUser } from "../reducers/userSlice";

// export function signInAPI() {
//   return (dispatch) => {
//     auth
//       .signInWithPopup(provider)
//       .then((payload) => {
//         // Handle successful authentication
//         console.log(payload);
//         dispatch(/* action to handle successful login */);
//       })
//       .catch((error) => {
//         // Handle authentication error
//         alert(error.message);
//       });
//   };
// }

// export const signInWithgoogle = async () => {
//   try {
//     const payload = await signInWithPopup(auth, provider);
//     const { displayName, email, photoURL, uid } = payload.user;
//     const userData = { displayName, email, photoURL, uid };
//     console.log(payload);
//     store.dispatch(setUser(userData));
//   } catch (err) {
//     console.log(err.message);
//   }
// };

export const signInWithGoogle = () => {
  return async (dispatch) => {
    try {
      const payload = await signInWithPopup(auth, provider);
      console.log(payload);
      dispatch(setUser(payload.user));
    } catch (err) {
      console.log(err);
    }
  };
};

export function getUserAuth() {
  return (dispatch) => {
    const userAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(userAuth.user));
      } else {
        dispatch(setUser(null));
      }
    });
  };
}

export const signOutApi = () => {
  return async (dispatch) => {
    try {
      const authSignOut = await signOut(auth);
      dispatch(setUser(authSignOut.null));
    } catch (err) {
      console.log(err);
    }
  };
};

export const postArticleApi = async (payload) => {
  try {
    if (payload.image) {
      const imageRef = storage.ref(`images/${payload.image.name}`);
      const uploadTask = imageRef.put(payload.image);

      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Progress: ${progress}%`);

        if (snapshot.state === "RUNNING") {
          console.log(`Progress: ${progress}%`);
        }
      });

      const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

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
    } else if (payload.video) {
      await db.collection("articles").add({
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
    }
  } catch (error) {
    console.error("Error posting article:", error);
  }
};
