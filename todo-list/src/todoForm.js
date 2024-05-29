
// import { useState } from "react"

function TodoForm ({
    handleSubmit,
    checked,
    setChecked, 
    purposeInput,
    setPurposeInput,
    dateInput,
    setDateInput
    // deadlineInput,
    // setDeadlineInput,

}) {
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Purpose :
                <br/>
                <input
                type = "text"
                value = {purposeInput}
                onChange={(e) => setPurposeInput(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Completed:
                <br/>
                <input
                type = "checkbox"
                onChange={(e) => setChecked(e.target.checked)}/>
                {/* {checked ? (
                <div>Task has been completed</div>
            ) : (
                <div>Task is yet to-do</div>
            )} */}
            </label>
            <br/>
            <label>
                Date:
                <br/>
                <input
                type = "text"
                value = {dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                />
            </label>
            <br/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm
