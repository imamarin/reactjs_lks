import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Responden from "./components/Responden";
import Title from "./components/Title";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Title/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/admin" element={<Admin />}/>
        <Route exact path="/responden" element={<Responden/>}/>
      </Routes>
    </Router>
  );
}

export default App;
