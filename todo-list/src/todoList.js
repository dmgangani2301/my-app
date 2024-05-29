import { useState } from "react";
import TodoDisplay from "./todoDisplay"
import TodoForm from "./todoForm";

function TodoList() {
    // APPLICATION WITH THE INITILIZATION OF THE LIST
  const [todoItems, setTodoItems] = useState([
    { purpose: "Register the limited company", deadline: "End of the year", date: "31/12/2024" },
    { purpose: "Register with the accountant", deadline: "Submit the tax paperwork and invoices", date: "01/12/2024" },
    { purpose: "Pay end of year tax", deadline: "Before the tax year end", date: "31/12/2024" }
  ]);
    // USESTATES FOR PURPOSE,DEADLINE AND DATE

    const [purposeInput, setPurposeInput] = useState("")
//  const [statusInput, setStatusInput] = useState("")
    const [dateInput, setDateInput] = useState("")

   // CLICK HANDLERS

   // DELETE ENTRY ON CLICKING THE "CLEAR" BUTTON
  const handleClick = (index) => {
        let storedTodoItems = [...todoItems] // CREATE ARRAY OF THE CURRENT ITEM IN THE STATE
        storedTodoItems.splice(index, 1)     // REMOVE ONE ITEM FROM THE INDEX
        setTodoItems(storedTodoItems)        // SET STATE TO ARRAY
    }
  
  
  //Toggles the status of the entry when the "Toggle" button is clicked

  const handleClickToggleCompleted = (index) => {
    let storedTodoItems = [...todoItems] //create array of current items in state
    // console.log(storedTodoItems[index])
    if (storedTodoItems[index].status === true) { //If true/completed
        storedTodoItems[index].status = false //Set to false/to-do
    }
    else {
        storedTodoItems[index].status = true //Set to true/completed
    }
    setTodoItems(storedTodoItems) //set state to array
}

//Submit handler, updates the state of todoItems 

const handleSubmit = (e) => {
    e.preventDefault()
    if (purposeInput.length > 0) //Only add if the task description has been filled
    {
        if (dateInput === "") {
            console.log("Empty date input")
            // setDateInput("-")
        }

        setTodoItems([...todoItems, { purpose: purposeInput, deadline: checked, date: dateInput }])
        setPurposeInput("") //Empty textbox input
        setDateInput("") //Empty textbox input
        // setChecked(false)
    }
    else {
        alert("Please provide a task to add to the list") //Give an alert to the user if a task hasn't been given
    }
}

//Checkbox handler

const [checked, setChecked] = useState(false);
function handleCheck(e) {
    setChecked(e.target.checked);
}

return (
    <div>
        <h2>Add an item</h2>
        <div class="flex-form">
            <TodoForm

                //Handlers

                handleSubmit={handleSubmit}
                handleCheck={handleCheck}
                setChecked={setChecked}

                //Input

                purposeInput={purposeInput}
                setPurposeInput={setPurposeInput}

                dateInput={dateInput}
                setDateInput={setDateInput}
                checked={checked}

            // statusInput={statusInput}
            // setStatusInput={setStatusInput}
            />
        </div>

        <h2>To-do List</h2>
        {todoItems.length > 0 ? (<p>{todoItems.length} items in the list</p>):(<p>There are no items in the list</p>)}
        <div class="flex-list">
            {todoItems.map(((item, index) => {
                return (
                    <TodoDisplay

                       purpose={item.purpose}
                        deadline={item.deadline}
                        date={item.date}

                        handleClick={() => handleClick(index)}
                        handleClickToggleCompleted={() => handleClickToggleCompleted(index)}
                        
                        numberOfItems={todoItems.length}/>)
            }))}
        </div>
    </div>
)
}

export default TodoList