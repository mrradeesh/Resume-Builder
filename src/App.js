import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>haii Welcome to Home page</>} />
        <Route path="/Sign-In" element={<>Welcome to Sign-in</>} />
        <Route path="/Sign-up" element={<>Welcome to Sign-up</>} />
      </Routes>
      <div>hai </div>
    </>
  );
}

export default App;
