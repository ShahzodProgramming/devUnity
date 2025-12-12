import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={
        darkMode
          ? ` father bg-gray-950 text-gray-50 min-h-screen pb-10`
          : `father bg-gray-50 text-gray-950 min-h-screen pb-10`
      }
    >
      <div className="content max-w-6xl w-[90%] mx-auto min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/about"
            element={<About darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
        </Routes>

      </div>
    </div>
  );
};

export default App;
