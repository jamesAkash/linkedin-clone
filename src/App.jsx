import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Feed from "./components/body/Feed/Feed";
import Sidebar from "./components/body/Sidebar/Sidebar";
import Home from "./pages/Home";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {!user ? (
        <Home />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

/*
BrowserRoute
Routes - Home, login
Protected Route - App
App - nav, side, <Route shared>, widget
Shared - feed, home, network,jobs
*/

export default App;
