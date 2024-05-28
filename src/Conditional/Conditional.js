import { useState } from "react";

const Conditional = () => {
    const[display, setDisplay] = useState(true)

    return (
        <div>
            { display && <Card /> }
            <button onClick={() => setDisplay(!display)}>Click me</button>
        </div>
    )
}

const Card = () => {
    return (
        <div>
        <h1>SHOWING</h1>
    </div>
    )
}
export default Conditional