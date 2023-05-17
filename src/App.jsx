import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Feed from "./components/body/Feed/Feed";
import Sidebar from "./components/body/Sidebar/Sidebar";

function App() {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App body */}
      <div className="app__body">
        {/* ------Sidebar */}
        <Sidebar />
        <Feed />
        {/* ------Widgets */}
      </div>
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
