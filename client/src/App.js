import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DisplayAll from "./components/DisplayAll";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditNoteWall from "./components/EditNoteWall";
// import HumanModel from "./components/human";
import HumanModel from "./components/HumanModel";
import { useGLTF } from '@react-three/drei';
import Human from "./components/human";
import {Model} from "./components/Scene.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/human" element={<Human />} />
          {/* <Route path="/model" element={<Model/>} /> */}
          {/* <Route path="/new" element={<EventForm />} />
          <Route path="/edit/:id" element={<EditEventform />} /> */}
          <Route path="/info" element={<DisplayAll/>} />
          <Route path="/edit/notes/:id" element={<EditNoteWall />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;