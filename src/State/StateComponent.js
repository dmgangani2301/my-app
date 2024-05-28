import { useState } from "react"


const StateComponent = () => {
    const [persons, setPersons] = useState([    // useState is a method where we get 2 things, persons is a value and setPersons is a function 
    { name: 'Dave', age: 33 },                  // DATA IS AN EACH ITEM IN AN ARRAY 
    { name: 'Karen', age: 45},
    { name: 'Dave', age: 40},
    
] );

const deleteHandler = (index) => {
    // MAKE A  COPY OF THE ARRAY 
    const storedPersons = [...persons] // 3 DOTES taking the value of persons, which is an array, and it's basically unpacking them, like unpacking them all and storing them inside a new array.
    // MADE CHANGES -- REMOVE AN ITEM FROM A SPECIFIC POSITION WITH SPLICE METHOD 
    storedPersons.splice(index, 1)
    // UPDATE OUR STATE WITH A NEW VALUE 
    setPersons(storedPersons)
}
    return (
        <div>          
            <div>
                {persons.map((person, index) => {
                    return 
                    <Person name={person.name}
                            age={person.age}
                            handleClick={() => deleteHandler(index)}
                            />
                        })}              
                        </div>
                        </div>                      
                )
            }              

            const Person = ({ name, age, handleClick }) => {
                return (
                    <div>
                        <h1>Name: {name}</h1>
                        <h1>Age: {age}</h1>
                        <button onClick={handleClick}>delete</button>
                    </div>
                )
            }    
            export default StateComponent;
            /* <Person name={persons[0].name} age={persons[0].age}/>
            <Person name={persons[1].name} age={persons[1].age}/>
            <Person name={persons[2].name} age={persons[2].age}/> */
                                                  
             

