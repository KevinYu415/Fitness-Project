import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams , useNavigate} from "react-router-dom";
import styles from './edit.module.css';

const EditNoteWall = (props) => {
    const [allNoteWall, setAllNoteWall] = useState([]);
    const { id } = useParams();
    const [repAmount, setRepAmount] = useState("");
    const [day, setDay] = useState("");
    const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/calendar/${id}`)
      .then((response) => {
        console.log(response.data);
        setRepAmount(response.data.reps);
        setDay(response.data.value);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/NoteWall/${id}`, { title: repAmount , body: day})
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  const handleDeleteNoteWall = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/NoteWall/${idFromBelow}`)
      .then((response) => {
        console.log(response);
        const filteredNoteWall = allNoteWall.filter((noteWall) => {
          return noteWall._id !== idFromBelow;
        });
        setAllNoteWall(filteredNoteWall);
      })
      .catch((err) => {
        console.log("error deleting author", err.response);
      });
  };
  return (
    <form onSubmit={submitHandler}>
        <div className={styles.container}>
            <div>
                <h1>Note</h1>
            </div>
            <div>
                <Link to="/">go back home</Link>
            </div>
        </div>
      <div className={styles.inputs}>
        <div>
            <label htmlFor="title">Note Title</label>
            <span className={styles.textcolor}> {errors.title ? <span> {errors.title.message} </span> : null}</span> <br></br>
            <br></br>
            <input
            type="text"
            id="name"
            value={repAmount}
            onChange={(e) => setRepAmount(e.target.value)}
            />
            <p><label htmlFor="title">Note Body</label>
             <span className={styles.textcolor}>{errors.body ? <span > {errors.body.message} </span> : null}</span> <br></br>
            <input
            type="textarea"
            id="name"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            /></p>

        
            <button type="submit" className="btn btn-primary">
                Edit Note
            </button>

            <button onClick={() => handleDeleteNoteWall(id)}
                                className="btn btn-danger">
                Delete Note
            </button>

        </div>
    </div>
    </form>
  );
};

export default EditNoteWall;