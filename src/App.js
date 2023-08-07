import "./App.css";
import AnimeItem from "./Components/Anime";
import Homepage from "./Components/Homepage";
import Popular from "./Components/Popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />}></Route>
      </Routes>
      {/* <div className="App">
        <Popular />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
