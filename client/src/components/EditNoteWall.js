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
    const [name, setName] = useState("");

  const navigate = useNavigate();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/calendar/${id}`)
      .then((response) => {
        console.log(response.data);
        setRepAmount(response.data.reps);
        setDay(response.data.day);
        setName(response.data.name);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/calendar/${id}`, { reps: repAmount , day: day})
      .then((response) => {
        console.log(response);
        navigate("/info");
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  const handleDeleteNoteWall = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/calendar/${idFromBelow}`)
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
    <div className={styles.backgroundColor}>
    <div className={styles.centerContainer}>
      <div className={styles.formContainer}>
    <form onSubmit={submitHandler}>
        <div className={styles.container}>
            <div>
                <h1>{day}: {name}</h1>
            </div>
            {/* <div className="btn btn-primary fs-4">
              <button><Link to="/info">Back to Schedule</Link></button>
            </div> */}
            <div  className="btn btn-primary fs-4">
                <button className="primary"><Link to="/exercise"> Search new Exercise </Link></button>
            </div>
        </div>
      <div className={styles.inputs}>
        <div>
            <span className={styles.textcolor}> {errors.reps ? <span> {errors.reps.message} </span> : null}</span> <br></br>
            <label htmlFor="repAmount"class="fs-5">Reps</label>
            <input
            type="number"
            id="repAmount"
            value={repAmount}
            onChange={(e) => setRepAmount(e.target.value)}
            />
            <p>
              {/* <label htmlFor="title">Day of week</label>
             <span className={styles.textcolor}>{errors.value ? <span > {errors.value.message} </span> : null}</span> <br></br>
            <input
            type="text"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            /> */}
            <label htmlFor="title" class="fs-5">Day</label>
                    <select value={day} onChange={(e) => setDay(e.target.value)}>
                        {/* <option> </option> */}
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
            </p>

        
            <button type="submit" className="btn btn-primary ">
                Edit Note
            </button>

            <button onClick={() => handleDeleteNoteWall(id)}
                                className="btn btn-danger">
                Delete Note
            </button>

        </div>
    </div>
    
    </form>
    </div>
    </div>
    </div>
  );
};

export default EditNoteWall;