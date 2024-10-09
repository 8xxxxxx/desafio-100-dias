import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1);
    }

    function decrement() {
        setCount(count => count - 1);
    }

    return(
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
}

export default Counter;