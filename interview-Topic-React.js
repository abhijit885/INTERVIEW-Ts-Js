//////////////////////--------- Topics -----------/////////////////////

//UseRef() Hooking Perticuler component of HTML
//UseMemo() 
// ref()
// useRef()
//Cookies vs Local Storage vs Session Storage
//media Query for web react
//lifecycle methods order of execution

//////////////////////--------- Descriptions -----------/////////////////////

//lifecycle methods 
1.constructor()//1st
2.Render() //2nd
3.componentDidMount() //3rd
2.Render() //(again) //4th
4.componentDidUpdate(prevProps, prevstate) //5th
5.componentWillUnmount()//6th

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


