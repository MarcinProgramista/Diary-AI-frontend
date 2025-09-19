import Register from "./components/Register/Register";
import { GlobalStyle } from "./theme/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import Login from "./components/Login/Login";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
