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
                  if(i.value == "Monday")
                    mondayArr.push({
                        _id: i._id , 
                        name: i.name,
                        value: i.value, 
                        reps: i.reps,
                        })
                    }
                    setMonday(mondayArr);

                for(let i of response.data){
                  if(i.value == "Tuesday")
                    tuesdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        value: i.value, 
                        reps: i.reps,
                        })
                    }
                    setTuesday(tuesdayArr);

                for(let i of response.data){
                  if(i.value == "Wednesday")
                    wednesdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        value: i.value, 
                        reps: i.reps,
                        })
                    }
                    setWednesday(wednesdayArr);

                for(let i of response.data){
                  if(i.value == "Thursday")
                    thrusdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        value: i.value, 
                        reps: i.reps,
                        })
                    }
                    setThursday(thrusdayArr);

                for(let i of response.data){
                  if(i.value == "Friday")
                    firdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        value: i.value, 
                        reps: i.reps,
                        })
                    }
                    setFriday(firdayArr);

                for(let i of response.data){
                  if(i.value == "Saturday")
                    saturdayArr.push({
                        _id: i._id , 
                        name: i.name,
                        value: i.value, 
                        reps: i.reps,
                        })
                    }
                    setSaturday(saturdayArr);

                for(let i of response.data){
                  if(i.value == "Sunday")
                    sundayArr.push({
                        _id: i._id , 
                        name: i.name,
                        value: i.value, 
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
      const filteredNoteWall = Monday.filter((noteWall) => {
        return noteWall._id !== idFromBelow;
      });
      setMonday(filteredNoteWall);
      navigate("/info");
    })
    .catch((err) => {
      console.log("error deleting author", err.response);
    });
};

  return (
    <div className={styles.container}>
        <div className={styles.split}>
           
            {/* <div className={styles.box} >
                <Link to="/notes/new">Create Event</Link>
            </div> */}
            <div className={styles.box} >
                <Link to="/">Home</Link>
            </div>
        </div>
        <div className={styles.center}>
          <table >
            <tbody>
              {Monday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td><h2>{noteWall.name}</h2>
                        <p>{noteWall.reps}</p>
                        <p>{noteWall.value}</p>
                        {/* <p>{noteWall._id}</p> */}
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteNoteWall(noteWall._id)}
                                className="btn btn-danger">
                Delete Note
            </button>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.center}>
          <table >
            <tbody>
              {Tuesday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td><h2>{noteWall.name}</h2>
                        <p>{noteWall.reps}</p>
                        <p>{noteWall.value}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.center}>
          <table >
            <tbody>
              {Wednesday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td><h2>{noteWall.name}</h2>
                        <p>{noteWall.reps}</p>
                        <p>{noteWall.value}</p>
                        </td>

                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                      
                        </td>
                  </tr>
                  
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.center}>
          <table >
            <tbody>
              {Thursday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td><h2>{noteWall.name}</h2>
                        <p>{noteWall.reps}</p>
                        <p>{noteWall.value}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.center}>
          <table >
            <tbody>
              {Friday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td><h2>{noteWall.name}</h2>
                        <p>{noteWall.reps}</p>
                        <p>{noteWall.value}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.center}>
          <table >
            <tbody>
              {Saturday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td><h2>{noteWall.name}</h2>
                        <p>{noteWall.reps}</p>
                        <p>{noteWall.value}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.center}>
          <table >
            <tbody>
              {Sunday.map((noteWall, index) => {
                return (
                    <tr className={styles.table} key={noteWall._id}>
                        <td><h2>{noteWall.name}</h2>
                        <p>{noteWall.reps}</p>
                        <p>{noteWall.value}</p>
                        </td>
                        <td>       
                        <Link to={`/edit/notes/${noteWall._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>


  );
};

export default DisplayAll;

