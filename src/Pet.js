/*TASK 2 - CREATE A NEW FUNCTIONAL COMPONENT CALLED PET THAT RETURNS SOME PROPS CALLED petsName and type ( A h2 for example ) "Hi my name is Deepti"

NEST/RENDER(GIVE) YOUR PET COMPONENT INTO THE PERSON COMPONENT. THEN SAVE AND CHECK THE BROWSER THAT IT HAS RENDERED CORRECTLY.

PASS SOME PROPS. FROM THE PERSON COMPONENT IN THE APP COMPONENT:petsName and type.Give them any values you want.
FOR EXAMPLE job="junior developer".

THEN INSIDE THE PERSON COMPONENT,REPLACE/CREATE NEW PROPS FOR YOUR PET COMPONENT. THEN FINALLY, INSIDE THE PET COMPONENT,
CHANGE THE SENTENCE TO USE THE VALUES. */

import { type } from "@testing-library/user-event/dist/type";

const Pet = ({petsName, type}) => {         // CREATE A NEW FUNCTIONAL COMPONENT CALLED PET THAT RETURNS SOME TEXT ( A h2 for example ) "Hi my name is Deepti"
    return (
      <div>
      <h2>I love my pet called {petsName} and type of pet is {type}.</h2>
      </div>
      )
  }

  export default Pet;

