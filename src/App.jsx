import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Deptor from "./pages/deptor/deptor"
import CreateDeptor from "./pages/create-deptor/create-deptor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/deptor" element={<Deptor />} />
        <Route path="/createdeptor" element={<CreateDeptor />} />
      </Routes>
    </Router>
  );
}

export default App;

