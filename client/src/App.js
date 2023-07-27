import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DisplayAll from "./components/DisplayAll";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditNoteWall from "./components/EditNoteWall";
import FrontPage from "./components/FrontPage";
// import HumanModel from "./components/human";

import Human from "./components/human";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/exercise" element={<HomePage />} />
          <Route path="/human" element={<Human />} />
          <Route path="/info" element={<DisplayAll/>} />
          <Route path="/edit/notes/:id" element={<EditNoteWall />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;