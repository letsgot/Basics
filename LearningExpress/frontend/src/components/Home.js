import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import AddWorkout from './AddWorkout';

import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../redux/slices/WorkoutSlice';
import { increment } from '../redux/slices/WorkoutSlice.js'
//redux 
// slice  : to get some part of store in slices 

function Home() {

    // let [workouts,setWorkouts] = useState([]);

    let dispatch = useDispatch();

    // let workoutsData = useSelector((state) => {
    //     console.log(state.workout);
    //     setWorkouts(workouts)
    //     return state.workout.data;
    // });

    // const workoutsData = useSelector((state) => state.workout.data);

    // useEffect(() => {
    //     dispatch(fetchData())
    // }, [])

    useEffect(() => {
        const fetchResources = async () => {
            console.log("Helooo");
            const response = await fetch('/api/workouts/');
            // console.log(data);
            let data = await response.json();
              console.log(data.workouts);
            dispatch(increment([data.workouts,false,""]));
        };

        fetchResources();
    }, [])

    let work = [];
    let works =  useSelector((state) => state.workout.data)
    let loading =  useSelector((state) => state.workout.loading)
    console.log(works,loading);
    return (
        <div>
            {
                works.map((item) => {
                    return <div key={item._id}>{item.title}    <span>  {item._id}</span></div>
                })
            }
            <div >Add new workout</div>
        </div>
    )
}

export default Home



//   let [workouts,setWorkouts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(()=>{
//     const fetchResources = async () => {
//       console.log("Helooo");
//   const response = await fetch('/api/workouts/');
//   // console.log(data);
//   let data  = await response.json();
//     //   console.log(data.workouts);
//       setWorkouts(data.workouts);
//     };

//     fetchResources();
//   },[])