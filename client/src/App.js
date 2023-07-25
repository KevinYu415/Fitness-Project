import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DisplayAll from "./components/DisplayAll";
import 'bootstrap/dist/css/bootstrap.min.css';
import EditNoteWall from "./components/EditNoteWall";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
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