import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/body/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App body */}
      <div className="app__body">
        {/* ------Sidebar */}
        <Sidebar />
        {/* ------Feed */}
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
