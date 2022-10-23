import React, {useEffect, useState} from 'react';
import './App.css';

type PropsType =
    { userId: number, id: number, title: string, completed: boolean }

function App() {
    const [todos, setTodos] = useState<PropsType[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    const onClickHandler = () => {
        setTodos([])
        console.log(todos)
    }
    const todosList = todos.map((el) => {
        return (
            <div>
                <h1>First Heroku Build</h1>
                <li key={el.id}>
                    <span>{el.id} - </span>
                    <span>{el.title}</span>
                    <span>{el.completed}</span>
                    <span>{el.userId}</span>
                </li>
            </div>
        )
    })


    return (
        <div className="App">
            <button onClick={onClickHandler}>NEW POSTS</button>
            <ul>
                {todosList}
            </ul>
        </div>
    );
}

export default App;
