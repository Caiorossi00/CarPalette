import { Routes, Route } from "react-router-dom";
import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CarList />} />
      <Route path="/car/:id" element={<CarDetails />} />
    </Routes>
  );
}

export default App;
