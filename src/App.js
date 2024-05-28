// FUNCTIONAL COMPONENT -- STARTS OFF JUST LIKE ANY OTHER FUNCTION WITH SYNTAX AS FOLLOW AND DIV ELEMENT WITH () BRACKET BEFORE RETURN. // 
 /* NESTING  AND IMPORTING CHILD COMPONENT CALLED PERSON INTO APP.JS SO WE CAN CALL IT AGAIN AND AGAIN AS MANY TIMES AS WE WANT BY WRITING
    PERSON COMPONENT <Person />  */

//import Netflix from "./task/Netflix/netflix";
//import Airbnb from "./task/Airbnb/airbnb";
//import Bbc from "./task/Bbc/bbc";*/
//import Job from "./Job";
//import Pet from "./Pet";
import { useState } from "react"
import Conditional from "./Conditional/Conditional";
import Form from "./Controlled/Forms";
import StateComponent from "./State/StateComponent";
import Person from "./Person"




const App = () => {
const [persons, setPersons] = useState([]);      // 1ST STATE IS AN ARAY
const [nameInput, setNameInput] = useState('');  // 2ND STATE IS A VALUE THAT WE ARE TAKING FROM THE USER BEING STORED IN NAME INPUTS.
const [ageInput, setAgeInput] = useState('');    // 3RD STATE IS A VALUE THAT WE ARE TAKING FROM THE USER BEING STORED IN AGE INPUTS.

const handleClick = (index) => { 
  // duplicating the state allows us to change that copied array
let storedPeople = [...persons]; // NEW DUPLICATE ARRAY
   // to remove a specific item from an array
storedPeople.splice(index, 1); 
  // updating our persons state
setPersons(storedPeople);
};

const handleSubmit = (e) => { 
    // stop the page refreshing 
e.preventDefault();
   // unpacking the items that are inside the array
setPersons([...persons,{name: nameInput, age: parseInt(ageInput)}]); // LIKE A PUSH METHOD, WE ARE ADDING ALL THE ITEMS IN THE ARRAY.
setNameInput('');
setAgeInput('');
};

return (
   <div>
   <Form 
         handleSubmit={handleSubmit} // PROPS 
         nameInput={nameInput} 
         setNameInput={setNameInput}
         setAgeInput={setAgeInput} 
         ageInput={ageInput}
         />
{persons.map((person, index) => { 
return (
<Person 
         name={ person.name } 
         age={ person.age } 
         key={ index } 
         handleClick={() => handleClick(index)}
         />
)
})}
</div>
)}

export default App;


{/* // const App = () => { */}
//   const [persons, setPersons] = useState([    // useState is a method where we get 2 things, persons is a value and setPersons is a function 
//     { name: 'Dave', age: 33 },
//     { name: 'Karen', age: 45},
//     { name: 'Dave', age: 40},
// ] );

// return (
//   <div>
//     <form />
//       {/* <div>      
//         <h1>My React Project</h1>
//       <Person name={persons[0].name} age={persons[0].age}/>
//       <Person name={persons[1].name} age={persons[1].age}/>
//       <Person name={persons[2].name} age={persons[2].age}/>
//       </div>             */}
//   </div>
// );
// };

// export default App;

/*const App = () => {
  return (
        <div>
          <Netflix />
          <Bbc />
          <Airbnb />
          <h1>State day</h1>
      </div>
   
  );
  };

export default App*/



/*<h1>My React Project</h1>
      <Person name ="Dave" age="33" petsName="Tomy" type={"dog"} /> 
      <Job job ="Senior Developer"/>
      <Person name ="Karen" age="45" petsName="Bella" type={"cat"} /> 
      <Job job ="Junior Developer"/>
      <Person name ="Steve" age="40" petsName="Samba" type={"dog"} />  
      <Job job ="Senior Developer"/>*/






/*                            NORMAL FUNCTIONAL COMPONENT SYNTAX:(JAVASCRIPT FUNCTION OR JAVASCRIPT CLASS)
const App = () => {
  return (
    <div className="App">
      <div>
        <h1>My React Project</h1>
      </div> 
  </div> 
  );
}

export default App; 
*/