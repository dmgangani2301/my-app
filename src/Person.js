/*LET'S CREATE A FUNCTIONAL COMPONENT CALLED PERSON WITH CAPITAL P AND NEST IT INTO 
OUR MAIN APP COMPONENT AND YOU MAKE SURE YOU EXPORT YOUR FUNCTIONAL COMPONENT */

/* TASK-2 RENDER YOUR PET COMPONENT WITH PROPS petsName and type IN HERE INPERSON COMPONENT LIKE IN LINE 13 */

import Pet from "./Pet";

const Person = ({name, age, handleClick }) => {
    return (
        <div>
          <h1>Name: {name}</h1>
          <h1>Age:{age}</h1>          
          <button onClick={handleClick}>delete</button>
          
        </div>
    );
};

export default Person;
