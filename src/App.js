import { Route, Routes } from "react-router-dom";
import './styles/App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Main'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
