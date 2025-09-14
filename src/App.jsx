// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./Index";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Index />
        <Footer />
      </div>
    </>
  );
}

export default App;
