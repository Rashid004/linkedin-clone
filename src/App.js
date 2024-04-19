/** @format */
// import React, { useEffect } from "react";

// import "./App.css";
import Header from "./features/Header";
import Sidebar from "./features/Sidebar";
import Feed from "./features/Feed";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout, selectUser } from "./features/userSlice";
// import Login from "./features/Login";
// import { auth } from "./features/Firebase";

// function App() {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     auth.onAuthStateChanged((userAuth) => {
//       if (userAuth) {
//         dispatch(
//           login({
//             email: userAuth.email,
//             uid: userAuth.uid,
//             displayName: userAuth.displayName,
//             photoURL: userAuth.photoURL,
//           })
//         );
//       } else {
//         dispatch(logout());
//       }
//     });
//   });
//   return (
//     <div className="app">
//       <Header />

//       {!user ? (
//         <Login />
//       ) : (
//         <div className="app__body">
//           <Sidebar />
//           <Feed />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { login, logout, selectUser } from "./userSlice";
// // import Login from "./Login";
// import { auth } from "./features/Firebase";
// import Login from "./features/Login";
// import { login, logout, selectUser } from "./features/userSlice";

// function App() {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((userAuth) => {
//       if (userAuth) {
//         dispatch(login(userAuth));
//       } else {
//         dispatch(logout());
//       }
//     });

//     return () => unsubscribe();
//   }, [dispatch]);

//   return (
//     <div className="app">
//       <Header />

//       {!user ? (
//         <Login />
//       ) : (
//         <div className="app__body">
//           <Sidebar />
//           <Feed />
//         </div>
//       )}
//     </div>
//   );
// }
// export default App;

// App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./features/Firebase";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./features/Login";
// import { login, logout, selectUser } from "./userSlice";
// import Login from "./Login";
// import { auth } from "./Firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const userData = {
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        };
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
