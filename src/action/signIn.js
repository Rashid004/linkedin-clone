/** @format */

// Import necessary Firebase modules
import { auth, provider } from "../firebase";

// Define the action creator function
export function signInAPI() {
  return () => {
    // Call signInWithPopup method on the auth object with the GoogleAuthProvider
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        // Handle successful authentication
        console.log(payload);
      })
      .catch((error) => {
        // Handle authentication error
        alert(error.message);
      });
  };
}
