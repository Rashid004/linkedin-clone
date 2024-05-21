/** @format */

import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
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
