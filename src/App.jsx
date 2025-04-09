import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/css/tailwind.css";

// ✅ 匯入 Home 頁面元件
import Home from "./pages/home";
import Layout from "./layout/header";
import Contact from "./pages/contact";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* 導向 /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            {/* 真正的 /home 路由 */}
            <Route path="/home" element={<Home />} />
            {/* 導向 /about */}
            <Route path="/contact" element={<Contact />} />
          </Route>

         
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
