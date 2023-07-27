import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams , useNavigate} from "react-router-dom";
import HumanModel from "./human";
import styles from './homepage.module.css';
import Human from "./human";
import Modal from "react-modal";
function HomePage() {

    const [muscle, setMuscle] = useState('');
    const [display, setDisplay] = useState([]);
    // const [name, setName] = useState('');
    const [reps, setReps] = useState("");
    const [exercise, setExercise] = useState("");
    const [value, setValue] = useState("");
    const [errors, setErrors] = useState({});
    const [title, setTitle] = useState({});
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [tempExercise, setTempExercise] = useState("");
    const [tempDay, setTempDay] = useState("");

    // const bicep = `chest`;
    let arr=[];

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
        {
          headers: {
            'X-Api-Key': '', // Replace 'YOUR_API_KEY' with your actual API key
          },
        }
      );
      
      
      console.log(response.data); // The response data will be available here
      setDisplay(response.data);
      
      for(let i of response.data){
        arr.push({
                name: i.name
            })
    }

      setTitle(arr); 
      console.log(title)
      
    } 
    catch (error) {
      console.error('Request failed:', error);

    }
  };


  // Function to handle the search button click
  const handleSearch = () => {
    fetchData();

  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleChangeExercise = (e) => {
    setExercise(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/calendar", { name: exercise, day: value, reps: reps})
      .then((response) => {
        console.log(response);
        // navigate("/")
        // setMuscle = {null};
        setIsModalOpen(true);
        //reset form

        setTempExercise("You have submitted "+ exercise+ " on to schedule!");
        setExercise("");
        setReps("");
        setValue("");
        setErrors({ name: null, day: null, reps: null });
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        // setErrors(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  
    };

   

  return (
    
    <div className={styles.color}> 
      <div className={styles.background}>
        {<Human/>}
      </div>
      <div className={styles.twoleft}>
        <div className={styles.upper}>
            <div>
              <h1>Fitness Exercise</h1>
              
              <select className="fs-4 me-2" value={muscle} onChange={(e) => setMuscle(e.target.value)}>
                <option value="abdominals">Abdominals</option>
                <option value="abductors">Abductors</option>
                <option value="biceps">Biceps</option>
                <option value="calves">Calves</option>
                <option value="chest">Chest</option>
                <option value="forearms">Forearms</option>
                <option value="glutes">Glutes</option>
                <option value="hamstrings">Hamstrings</option>
                <option value="lats">Lats</option>
                <option value="lower_back">Lower back</option>
                <option value="middle_back">Middle back</option>
                <option value="neck">Neck</option>
                <option value="quadriceps">Quadriceps</option>
                <option value="traps">Traps</option>
                <option value="triceps">Triceps</option>
              </select>
              {/* <input
                type="text"
                value={muscle}
                onChange={(e) => setMuscle(e.target.value)}
                placeholder="Enter muscle"
              /> */}
              <button className="fs-4"onClick={handleSearch}> Search</button>
            </div>

          
            <div>
              {display.map((item, index) => (                
                <div key={index}>
                  <li className="fs-5 ">Exercise: {item.name} <br></br>
                  Equipment: {item.equipment}</li><br></br>
                </div>       
              ))}     
            </div>
        </div> 
        <div>
            <form onSubmit={handleSubmit} >  
              <div className={styles.submitted}>
                {tempExercise}   
              </div>           
              <span className={styles.validationColor}> {errors.name ? <span> {errors.name.message} </span> : null}</span> <br></br>
              <label htmlFor="exercise" class="fs-5 fw-bold">Exercise Name </label>

              <div>
                {title.length > 0 ? (
                  <select value={exercise} onChange={handleChangeExercise}>
                    <option value=''> </option>
                    {title.map((item, index) => (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
              <span className={styles.validationColor}> {errors.day ? <span> {errors.day.message} </span> : null}</span> <br></br>
              <span className={styles.validationColor}> {errors.reps ? <span> {errors.reps.message} </span> : null}</span> <br></br>
              <label htmlFor="reps" class="fs-5 me-2 fw-bold" >Repetition </label>
              <input
                  className=""
                  type="number"
                  id="reps"
                  value={reps}
                  // value = {item.name}
                  onChange={(e) => setReps(e.target.value)}/> 

              <label htmlFor="value" class="fs-5 me-2 fw-bold">Day</label>
              <select value={value} onChange={handleChange}>
                  <option> </option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
              </select>
              <button className="btn btn-primary" type="submit"> Add!</button>
            </form>  
            <Link to="/info" class="fs-3 fw-bold">Schedule</Link> <br></br>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

