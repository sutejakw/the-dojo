import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles
import "./App.css";

// pages and component
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useAuthContext } from "./hooks/useAuthContext";
import OnlineUsers from "./components/onlineusers/OnlineUsers";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar user={user} />
            <Routes>
              <Route
                path="/"
                element={!user ? <Navigate to="/login" /> : <Dashboard />}
              ></Route>
              <Route
                path="/create"
                element={!user ? <Navigate to="/login" /> : <Create />}
              ></Route>
              <Route
                path="/projects/:id"
                element={!user ? <Navigate to="/login" /> : <Project />}
              ></Route>
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              ></Route>
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              ></Route>
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
