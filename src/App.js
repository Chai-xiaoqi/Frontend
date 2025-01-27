import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
