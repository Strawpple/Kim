import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar";
import Information from "./components/information";

function App() {
  return (
    <div className="body">
      <Navbar />
      <Information />
    </div>
  );
}

export default App;
