//////////////////////--------- Topics -----------/////////////////////

//UseRef() Hooking Perticuler component of HTML
//UseMemo() 
// ref()
// useRef()
//Cookies vs Local Storage vs Session Storage
//media Query for web react
//lifecycle methods order of execution

//////////////////////--------- Descriptions -----------/////////////////////



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


