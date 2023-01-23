//////////////////////--------- Basic Questions -----------/////////////////////
// touchableOpacity vs button
// scrollView vs flatlist
// Custom Hook
//lyfecycle methods order of execution
//pass function as props
//UseRef() Hooking Perticuler component of HTML
//UseMemo() 
// ref()

//////////////////////--------- Plugins -----------/////////////////////

// payment gatway
// how roted screen potret to landscrep
// testing JEST** + ENZYME
// high resolution image optimize
// if keystore loose what will do
// certifecate create in Ios
// import Scripts vartual scroll view
// cashing in RN 
// Google all services Map,Google Login,Facebook Login IN APP INTEGRATION
// Firebase Service (social login ,CRUD operation)
// Local Storage 

//////////////////////--------- Styles -----------/////////////////////

//Flex

//////////////////////--------- Descriptions -----------/////////////////////

//Lifecycle methods order of execution
// 1.constructor()//1st execute
// 2.Render() //2nd execute
// 3.componentDidMount() //3rd execute
// 2.Render() //(again) //4th execute
// 4.componentDidUpdate(prevProps, prevstate) //5th execute
// 5.componentWillUnmount()//6th execute


// //HOC
// import './App.css';
// import React, { useRef, useState } from 'react'
// function App() {
//     return (
//         <div className="App">
//             <h1>HOC </h1>
//             <HOCRed cmp={Counter} />
//             <HOCGreen cmp={Counter} />
//             <HOCBlue cmp={Counter} />
//         </div>
//     );
// }
// function HOCRed(props) {
//     return <h2 style={{ backgroundColor: 'red', width: 100 }}>Red<props.cmp /></h2>
// }
// function HOCGreen(props) {
//     return <h2 style={{ backgroundColor: 'green', width: 100 }}>Green<props.cmp /></h2>
// }
// function HOCBlue(props) {
//     return <h2 style={{ backgroundColor: 'blue', width: 100 }}>blue <props.cmp /></h2>
// }
// function Counter() {
//     const [count, setCount] = useState(0)
//     return <div>
//         <h3>{count}</h3>
//         <button onClick={() => setCount(count + 1)}>Update</button>
//     </div>
// }
// export default App;

// //pass function as props
// function getData() {
//     alert("Hello from app component")
// }
// <Student data={getData} />
// function Student(props) {
//     return (
//         <div>
//             <h1>Student Component</h1>
//             <button onClick={props.data}>Call Function</button>
//         </div>
//     )
// }
// export default Student;
