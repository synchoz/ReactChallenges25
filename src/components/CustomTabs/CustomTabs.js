import React, {useEffect, useState} from "react";
import './styles/style.css'

export default function CustomTabs() {
    const [, forceUpdate] = useState();
    const triggerReRender = () => {
        forceUpdate(s => !s); // Toggling state value to force re-render
    };

    const handleCick = (object, objIndex, event) => {
            const tempArr = todos;
            for (let i = 0; i < tempArr.length; i++) {
                i == objIndex ? tempArr[i].active = true : tempArr[i].active = false;
            }
           /*  console.log(tempArr); */
            setTodos(tempArr);
            triggerReRender();
    }
    const [todos, setTodos] = useState([]);
    useEffect(() =>{
        fetch('https://dummyjson.com/todos?limit=4')
            .then(res => { return res.json(); })
            .then((data) => {
                for (let index = 0; index < data.todos.length; index++) {
                    index == 0 ? data.todos[index]['active'] = true : data.todos[index]['active'] = false;
                    data.todos[index]['index'] = index;
                    //data.todos[index]['active'] = false;//iterating through the array of objects [{},{},etc...]
                }
                /* console.log(data.todos); */
                setTodos(data.todos);
            });
    }, []);
    
    return(
        <div>
            <div className="todoTabWrapper">
                {todos.map((todo, index) => (
                    <div id={todo.id} onClick={handleCick.bind(this, todo, index)} key={todo.id} className={todo.active ? 'tabItem active' : 'tabItem'}>
                        <div className="">Tab {todo.id}</div>
                    </div>
                ))}
            </div>
            {todos.map((todo) => (
                <div data-id={todo.id} key={todo.id} className={todo.active ? 'todoData active' : 'todoData'}>
                    {todo.todo}
                </div>
            ))}
        </div>
    )
}