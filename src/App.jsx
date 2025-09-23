import Register from "./components/Register/Register";
import { GlobalStyle } from "./theme/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import RequireAuth from "./hooks/RequireAuth";
import Notes from "./components/Notes/Notes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />}>
            <Route path="/home/notes/:category_id/Books" element={<Notes />} />
            <Route path="/home/notes/:category_id/Films" element={<Notes />} />
            <Route path="/home/notes/:category_id/Notes" element={<Notes />} />
          </Route>
        </Route>
        <Route element={<RequireAuth />}></Route>
      </Routes>
    </>
  );
}

export default App;
