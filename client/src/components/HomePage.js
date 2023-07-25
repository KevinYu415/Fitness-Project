import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams , useNavigate} from "react-router-dom";
function HomePage() {

    const [muscle, setMuscle] = useState('');
    const [display, setDisplay] = useState([]);
    // const [name, setName] = useState('');
    const [reps, setReps] = useState("");
    const [exercise, setExercise] = useState("");
    const [value, setValue] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    // const bicep = `chest`;


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

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/calendar", { name: exercise, value: value, reps: reps})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        // setErrors(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  
    };

  return (
    // Your JSX component rendering code goes here
    <div>
      <h1>Fetched Data</h1>
      <Link to="/info">Home</Link>
      <div>
        <input
          type="text"
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
          placeholder="Enter muscle"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
              {display.map((item, index) => (                
    
                    <li key={index}>Exercise: {item.name} 
                    <p>Equipment: {item.equipment}</p>

                   <div className="form-control">
          <form onSubmit={handleSubmit} > 
          <label htmlFor="exercise" class="fs-5">Exercise Name</label>
          <span > {errors.name ? <span> {errors.name.message} </span> : null}</span> <br></br>
                    <input
                        className=""
                        type="text"
                        id="exercise"
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}/> 
                 
                    <label htmlFor="title" class="fs-5">Reps</label>
                    <span > {errors.reps ? <span> {errors.reps.message} </span> : null}</span> <br></br>
                    <input
                        className=""
                        type="number"
                        id="reps"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}/> 
                    <label htmlFor="title" class="fs-5">Day</label>
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
                    <button className="btn btn-primary" type="submit">
                        Add!
                      </button>
                      </form>
              </div>
                  </li>
               
              ))}     
         
    </div>
  );
};

export default HomePage;

