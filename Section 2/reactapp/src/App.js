import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Link to="/homepage">Homepage</Link>
        <Link to="/login">Login</Link>

        <Routes>
          <Route element={<Home></Home>} path="/" />
          <Route element={<Home></Home>} path="/homepage" />
          <Route element={<Login></Login>} path="/login" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
