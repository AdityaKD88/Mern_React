import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import './App.css';
import EventHandling from "./components/EventHandling";

function App() {
  return (
    <div>
      <BrowserRouter>

        {/* <Link to="/homepage">Homepage</Link>
        <Link to="/login">Login</Link> */}

        <Header />

        <Routes>
          <Route element={<Home></Home>} path="/" />
          <Route element={<Home></Home>} path="/homepage" />
          <Route element={<Login></Login>} path="/login" />
          <Route element={<EventHandling />} path="/eventHandling" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
