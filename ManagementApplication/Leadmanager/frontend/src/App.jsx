import React from "react";
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";



function App() {
  return (
    <>
    <div id="dashboard" className="App main_container">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
    </>
  );
}

export default App;