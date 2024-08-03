import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {

  const [onLanding, setOnLanding] = useState(true);

  return (
    <div className="App">
      <Header onLanding={onLanding} />
      <div className='Main *:min-h-[calc(100vh-3rem)]'>
        <Routes>
          <Route path="/" element={<LandingPage setOnLanding={setOnLanding} />} />
          <Route path="/signup" element={<Signup setOnLanding={setOnLanding} />} />
          <Route path="/login" element={<Login setOnLanding={setOnLanding} />} />
          <Route path="/dashboard" element={<Dashboard setOnLanding={setOnLanding} />} />
          <Route path="/explore" element={<Explore setOnLanding={setOnLanding} />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
