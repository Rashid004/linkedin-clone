/** @format */

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

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

export const signInWithgoogle = async () => {
  try {
    const payload = await signInWithPopup(auth, provider);
    return payload;
  } catch (err) {
    console.log(err.message);
  }
};
