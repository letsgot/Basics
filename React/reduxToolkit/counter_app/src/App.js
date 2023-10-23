import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  let handleADDClick = ()=>{
    dispatch(increment());
  }

  let handleSubClick = ()=>{
    dispatch(decrement());
  }

  return (
    <>

      <button onClick={handleADDClick} >+</button>
      
      <input value={count} type='number'></input>

      <button onClick={handleSubClick} >-</button>
    </>
  );
}

export default App;
