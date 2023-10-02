import {
  Navbar,
  Footer,
  Home,
  About,
  Contact,
  Course,
  Teacher,
} from "./components/Index";
import { useState } from "react";

import "./App.css";
import Accordion from "./components/container/Accordion";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Course />
      <Teacher />
      <Accordion />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
