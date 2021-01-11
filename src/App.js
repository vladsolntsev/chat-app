import logo from './logo.svg';
import './App.css';
import Contact from "./components/Contact";

function App() {
  return (
      <div className="App">
        <Contact
            name="Jhon Doe"
            avatar="https://avatars0.githubusercontent.com/u/71027725?s=460&u=207ede12fdc8667750014ef0b6658ce046b4fdf4&v=4"
            online="online"
        />
      </div>
  );
}

export default App;
