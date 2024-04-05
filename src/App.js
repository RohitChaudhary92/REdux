
import React from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./Redux/Slice";
import { Counter } from "./Redux/Counter";
const App = () => {
const storevalue = useSelector((state)=>state)
console.log(storevalue);

const dispatch= useDispatch()

const getData = (value) => {
  dispatch(fetchPost())
}

  return (
    <>
<button onClick={getData}>get data</button>
<Counter/>
    </>
  );
};

export default App;