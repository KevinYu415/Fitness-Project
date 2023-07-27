import React, { Component } from 'react';
import { useEffect, useState } from "react";
import styles from './displayAll.module.css';
import axios from "axios";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";



const DisplayAll = () => {
  const [allNoteWall, setAllNoteWall] = useState([]);
  const [Monday, setMonday] = useState([]);
  const [Tuesday, setTuesday] = useState([]);
  const [Wednesday, setWednesday] = useState([]);
  const [Thursday, setThursday] = useState([]);
  const [Friday, setFriday] = useState([]);
  const [Saturday, setSaturday] = useState([]);
  const [Sunday, setSunday] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/calendar")
      .then((response) => {
        console.log(response.data);
        // setAllNoteWall(response.data);
        // const arr = [mondayArr = [],tuesdayArr = []]

        let mondayArr= [];
        let tuesdayArr= [];
        let wednesdayArr = [];
        let thrusdayArr = [];
        let firdayArr = [];
        let saturdayArr = [];
        let sundayArr = [];
                // console.log("here", response.data);
                for(let i of response.data){
                  if(i.day == "Monday")
                    mondayArr.push({
                        _id: i._id , 
                        name: i.name,
                        day: i.day, 
                        reps: i.reps,
                        })
                    }
                    setMonday(mondayArr);

                for(let i of response.data){
                  if(i.day == "Tuesday")
                    tuesdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        day: i.day, 
                        reps: i.reps,
                        })
                    }
                    setTuesday(tuesdayArr);

                for(let i of response.data){
                  if(i.day == "Wednesday")
                    wednesdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        day: i.day, 
                        reps: i.reps,
                        })
                    }
                    setWednesday(wednesdayArr);

                for(let i of response.data){
                  if(i.day == "Thursday")
                    thrusdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        day: i.day, 
                        reps: i.reps,
                        })
                    }
                    setThursday(thrusdayArr);

                for(let i of response.data){
                  if(i.day == "Friday")
                    firdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        day: i.day, 
                        reps: i.reps,
                        })
                    }
                    setFriday(firdayArr);

                for(let i of response.data){
                  if(i.day == "Saturday")
                    saturdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        day: i.day, 
                        reps: i.reps,
                        })
                    }
                    setSaturday(saturdayArr);

                for(let i of response.data){
                  if(i.day == "Sunday")
                    sundayArr.push({
                        _id: i._id , 
                        name: i.name,
                        day: i.day, 
                        reps: i.reps,
                        })
                    }
                    setSunday(sundayArr);
      }
      )
      
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  // const [monday, setMonday]= useState([]);
  // const organizer = (allNoteWall)=>{
  //   for{let i = 0; i<allNoteWall.length; i++ }
  //   if(allNoteWall.value == "Monday"){
  //     setMonday() = allNoteWall;
  //   }
  // }
  const handleDeleteNoteWall = (idFromBelow) => {
    axios.delete(`http://localhost:8000/api/calendar/${idFromBelow}`)
    .then((response) => {
      console.log(response);
      const filteredMonday = Monday.filter((noteWall) => {
        return noteWall._id !== idFromBelow;
      });
      const filteredTuesday = Tuesday.filter((noteWall) => {
        return noteWall._id !== idFromBelow;
      });
      const filteredWednesday = Wednesday.filter((noteWall) => {
        return noteWall._id !== idFromBelow;
      });
      const filteredThursday = Thursday.filter((noteWall) => {
        return noteWall._id !== idFromBelow;
      });
      const filteredFriday = Friday.filter((noteWall) => {
        return noteWall._id !== idFromBelow;
      });
      const filteredSaturday = Saturday.filter((noteWall) => {
        return noteWall._id !== idFromBelow;
      });
      const filteredSunday = Sunday.filter((noteWall) => {
        return noteWall._id !== idFromBelow;
      });
      setMonday(filteredMonday);
      setTuesday(filteredTuesday);
      setWednesday(filteredWednesday);
      setThursday(filteredThursday);
      setFriday(filteredFriday);
      setSaturday(filteredSaturday);
      setSunday(filteredSunday);
      navigate("/info");
    })
    .catch((err) => {
      console.log("error deleting author", err.response);
    });
};

  return (
    <div>
        <div className={styles.split}>
           
            <div className={styles.box} >
                <Link to="/">Home</Link>
            </div>
            <div className={styles.box} >
                <Link to="/exercise">Search for more Workout</Link>
            </div>
        </div>
      <div className={styles.schedulecontainer}>
        <div className={styles.schedulecolumn}>
          <table >
            <tbody>
              <h2>Monday</h2> 
              {Monday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td>
                         
                        <p>{noteWall.name}</p>
                        <p>{noteWall.reps}</p>
                        
                        {/* <p>{noteWall._id}</p> */}
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteNoteWall(noteWall._id)}
                                className="btn btn-danger">
                Delete
            </button>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.schedulecolumn}>
          <table >
            <tbody>
              <h2>Tuesday</h2> 
              {Tuesday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td>
                        
                        <p>{noteWall.name}</p>
                        <p>{noteWall.reps}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteNoteWall(noteWall._id)}
                                className="btn btn-danger">
                Delete
            </button>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.schedulecolumn}>
          <table >
            <tbody>
              <h2>Wednesday</h2> 
              {Wednesday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td>
                        
                        <p>{noteWall.name}</p>
                        <p>{noteWall.reps}</p>
                        </td>

                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteNoteWall(noteWall._id)}
                                className="btn btn-danger">
                Delete
            </button>
                      
                        </td>
                  </tr>
                  
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.schedulecolumn}>
          <table >
            <tbody>
              <h2>Thursday</h2> 
              {Thursday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td>
                        
                        <p>{noteWall.name}</p>
                        <p>{noteWall.reps}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteNoteWall(noteWall._id)}
                                className="btn btn-danger">
                Delete
            </button>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.schedulecolumn}>
          <table >
            <tbody>
            <h2>Friday</h2>
              {Friday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td>
                         
                        <p>{noteWall.name}</p>
                        <p>{noteWall.reps}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteNoteWall(noteWall._id)}
                                className="btn btn-danger">
                Delete
            </button>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.schedulecolumn}>
          <table >
            <tbody>
            <h2>Saturday</h2>
              {Saturday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td>
                         
                        <p>{noteWall.name}</p>
                        <p>{noteWall.reps}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteNoteWall(noteWall._id)}
                                className="btn btn-danger">
                Delete
            </button>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.schedulecolumn}>
          <table >
            <tbody>
            <h2>Sunday</h2>
              {Sunday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td>
                         
                        <p>{noteWall.name}</p>
                        <p>{noteWall.reps}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteNoteWall(noteWall._id)}
                                className="btn btn-danger">
                Delete
            </button>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default DisplayAll;

