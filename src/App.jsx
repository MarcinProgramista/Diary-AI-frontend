import Register from "./components/Register/Register";
import { GlobalStyle } from "./theme/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import RequireAuth from "./hooks/RequireAuth";
import Notes from "./components/Notes/Notes";
import DetialsNote from "./components/DetialsNote/DetialsNote";

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
        <Route element={<RequireAuth />}>
          <Route
            path="/home/notes/:category_id/Notes/note/:id"
            element={
              <>
                <Home $active $category="Notes" />
                <DetialsNote />
              </>
            }
          />

          <Route
            path="/home/notes/:category_id/Books/note/:id"
            element={
              <>
                <Home $active $category="Books" />
                <DetialsNote />
              </>
            }
          />
          <Route
            path="/home/notes/:category_id/Films/note/:id"
            element={
              <>
                <Home />
                <DetialsNote />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
