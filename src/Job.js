/*TASK 1 - CREATE A NEW FUNCTIONAL COMPONENT CALLED JOB THAT RETURNS SOME
TEXT ( A h2 for example ) "I'm a chef."
NEST YOUR CUSTOM COMPONENT INTO THE APP COMPONENT. THEN SAVE AN CHECK THE BROWSER THAT IT
HAS RENDERED CORRECTLY.

PASS THE JOB COMPONENT SOME PROPS. FOR EXAMPLE job="junior developer".THEN 
INSIDE THE JOB COMPONENT,REPLACE THE WORD "chef" WITH THE PROPS THAT YOU 
HAVE PASSED TO THAT COMPONENT. */

const Job = ({job}) => {         // CREATE A NEW FUNCTIONAL COMPONENT CALLED JOB THAT RETURNS SOME TEXT ( A h2 for example ) "I'm a chef." 
    return (
      <div>

        <h2>I'm a {job}.</h2>

        </div>
    )
    }
  
  export default Job;