import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

function App() {
  const myStyle = {
    minHeight: "100vh",
    width: "100%",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(/bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div style={myStyle}>
      <Navbar />

      {/* Prevent content from hiding behind navbar */}
      <main style={{
        paddingTop: "120px",
      }}>
        < Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main >
    </div >
  );
}

export default App;