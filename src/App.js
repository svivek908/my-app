import React,{useState} from 'react';
import Tweet from './tweet';
import PersonList from './Components/Personlist';
import PersonInput from './Components/PersonInput';
import Example from './Components/Example';
import logo from './logo.svg';



class App extends React.Component {  
  constructor() {  
       super();        
       this.state = { displayBio: false };  
       console.log('Component this', this);  
       this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
       }  
       toggleDisplayBio(){  
           this.setState({displayBio: !this.state.displayBio});  
           }  
       render() {  
           return (  
               <div>  
                   <h1>Welcome to JavaTpoint!!</h1>  
                   {  
                       this.state.displayBio ? (   
                           <div>  
                               <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
                               <button onClick={this.toggleDisplayBio}> Show Less </button>  
                         </div>  
                           ) : (  
                               <div>  
                                   <button onClick={this.toggleDisplayBio}> Read More </button>  
                               </div>  
                           )  
                   }  
              </div>  
         )  
     }  
 }  
  
// class App extends React.Component { 
//   render(){
//     return(
//       <div className="app">  
//       {/* <h1>
//       <Blink>Geocities!</Blink>
//       </h1> */}
//         <Example/>
//         {/* <PersonList />  */}
//       </div> 
//     )
//   }
// }

// function App(){
//   const [isRed,setRed] =  useState(false);
//   const [count,setCount] = useState(0);

//   const[users,setUsers]=useState([
//     {name:'vivek',messgae:'this 1'},
//     {name:'ajay',messgae:'this 2'},
//     {name:'kush',messgae:'this 3'},
//   ])

//   const Increment =()=>{
//     setCount(count+1);
//     setRed(!isRed);
//   }
//   const Decrement =()=>{
//     setCount(count-1);
//   }
//   return(
//     <div className="app">
//        <h1>Home</h1>  
      //   <PersonInput />
      //  <PersonList /> 
//       {/* {users.map(user=>(
//         <Tweet name={user.name} message={user.messgae}/>
//       ))} */}
//        {/* <h1 className={isRed ? "red":""}>Change my color!</h1>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Decrement}>Decrement</button>
//       <h1>{count}</h1> 
//      <Tweet name="vivek" message="this 1 name"/>
//      <Tweet name="ajay" message="this 2 name"/>
//      <Tweet name="kush" message="this 3 name"/>
//      <Tweet name="sumit" message="this 4 name"/>
//      <Tweet name="raj" message="this 5 name"/>  */}
//     </div>
//   );
// }
export default App;