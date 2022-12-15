//lyfecycle methods order of execution
1.constructor()//1st
2.Render() //2nd
3.componentDidMount() //3rd
2.Render() //(again) //4th
4.componentDidUpdate(prevProps, prevstate) //5th
5.componentWillUnmount()//6th

//HOC(Higher order Component) a component takes a component as props and return a component

import './App.css';
import React, { useRef, useState } from 'react'
function App() {
    return (
        <div className="App">
            <h1>HOC </h1>
            <HOCRed cmp={Counter} />
            <HOCGreen cmp={Counter} />
            <HOCBlue cmp={Counter} />
        </div>
    );
}
function HOCRed(props) {
    return <h2 style={{ backgroundColor: 'red', width: 100 }}>Red<props.cmp /></h2>
}
function HOCGreen(props) {
    return <h2 style={{ backgroundColor: 'green', width: 100 }}>Green<props.cmp /></h2>
}
function HOCBlue(props) {
    return <h2 style={{ backgroundColor: 'blue', width: 100 }}>blue <props.cmp /></h2>
}
function Counter() {
    const [count, setCount] = useState(0)
    return <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
}
export default App;

//pass function as props
function getData() {
    alert("Hello from app component")
}
<Student data={getData} />
function Student(props) {
    return (
        <div>
            <h1>Student Component</h1>
            <button onClick={props.data}>Call Function</button>
        </div>
    )
}
export default Student;

//UseRef() Hooking Perticuler component of HTML

//UseMemo() 
// ref()
// useRef()
