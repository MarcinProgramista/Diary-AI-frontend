import Register from "./components/Register/Register";
import { GlobalStyle } from "./theme/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import RequireAuth from "./hooks/RequireAuth";

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
            <Route
              path="/home/notes/:category_id/Books"
              element={<h1>Books</h1>}
            />
            <Route
              path="/home/notes/:category_id/Films"
              element={<h1>Films</h1>}
            />
            <Route
              path="/home/notes/:category_id/Notes"
              element={<h1>Notes</h1>}
            />
          </Route>
        </Route>
        <Route element={<RequireAuth />}></Route>
      </Routes>
    </>
  );
}

export default App;
