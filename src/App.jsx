import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import axios from "axios";
import AddTournament from "./Pages/AddTournament";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addtournament" element={<AddTournament />} />
          <Route path="/showtournament" element={<ShowTournament />} />

          {/* <Route
            path="/playlists"
            element={<ProtectedRoute children={<Layout><Playlist /></Layout>} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
