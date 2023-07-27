import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppJuegos from "./components/AppJuegos/appJuegos";
import CrearJuego from "./components/CrearJuego/CrearJuego";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppJuegos />} />
                    <Route path="/crear" element={<CrearJuego/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
