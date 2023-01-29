import React,{useState} from 'react'

function App () {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div className="app">
            <h2>React: 计数器案例 {count}</h2>
            <button onClick={increment}>+1</button>
        </div>
    )
}

export default App