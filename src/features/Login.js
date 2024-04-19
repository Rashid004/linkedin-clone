/** @format */

/** @format */
import { useState } from "react";
import "./Login.css";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/568px-LinkedIn_Logo_2013.svg.png?20131205172212"
        alt="linkedin icon"
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if regestring)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a memeber?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

/////////////////////////////////

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./userSlice";
// import { auth } from "./Firebase";

// function Login() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [profilePic, setProfilePic] = useState("");

//   const dispatch = useDispatch();

//   const loginToApp = async (e) => {
//     e.preventDefault();

//     try {
//       const userAuth = await auth.signInWithEmailAndPassword(email, password);
//       dispatch(login(userAuth.user));
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const register = async () => {
//     if (!name) {
//       return alert("Please enter a full name");
//     }

//     try {
//       const userAuth = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       await userAuth.user.updateProfile({
//         displayName: name,
//         photoURL: profilePic,
//       });
//       dispatch(
//         login({
//           email: userAuth.user.email,
//           uid: userAuth.user.uid,
//           displayName: name,
//           photoURL: userAuth.user.photoURL,
//         })
//       );
//     } catch (error) {
//       // Handle Firebase authentication errors
//       alert(error.message);
//       console.error("Firebase Error:", error);
//     }
//   };

//   return (
//     <div className="login">
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/568px-LinkedIn_Logo_2013.svg.png?20131205172212"
//         alt="linkedin icon"
//       />

//       <form>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Full name (required if regestring)"
//           type="text"
//         />
//         <input
//           value={profilePic}
//           onChange={(e) => setProfilePic(e.target.value)}
//           placeholder="Profile pic URL (optional)"
//           type="text"
//         />
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           type="email"
//         />
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           type="password"
//         />

//         <button type="submit" onClick={loginToApp}>
//           Sign in
//         </button>
//       </form>
//       <p>
//         Not a memeber?{" "}
//         <span className="login__register" onClick={register}>
//           Register Now
//         </span>
//       </p>
//     </div>
//   );
// }

// export default Login;
