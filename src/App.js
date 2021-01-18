import React from "react";
import './App.css';
import Contact from "./components/Contact";


function App() {
  return (
      <div className="App">
          <Contact
              name="Jeff Soto"
              avatar="https://randomuser.me/api/portraits/men/29.jpg"
              online="online"
          />
          <Contact
              name="Fely Black"
              avatar="https://randomuser.me/api/portraits/women/87.jpg"
              online=""
          />
          <Contact
              name="Aly Watts"
              avatar="https://randomuser.me/api/portraits/women/2.jpg"
              online="online"
          />
      </div>
  );
}

export default App;
