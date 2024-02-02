import "./App.css";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Calendario from "./pages/Calendario";
import Notas from "./pages/Notas";
import Agenda from "./pages/Agenda";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/notas" element={<Notas />} />
      </Routes>
  </Router>
  </div>

  );
}

export default App;