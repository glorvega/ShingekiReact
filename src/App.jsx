import './App.scss';
import {Routes, Route, Link} from "react-router-dom";
import Human from "./Pages/Human";
import Titan from "./Pages/Titan";


function App() {
  return (
    <div className="app">
     <h1>Shingeki no Kyojin API</h1>
      <Link to="/human">
        <button>Humans</button>
      </Link>
      <Link to="/titan">
        <button>Titans</button>
      </Link>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/human" element={<Human />} />
        <Route path="/titan" element={<Titan />} />
      </Routes>
    </div>
  );
}

export default App;
