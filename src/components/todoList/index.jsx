import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../store/slice/todoSlice";


 
const TodoList = () => {

    const [currentTodo, setCurrentTodo] = useState("");
    const dispatch = useDispatch();
    const {todoList} = useSelector(state => state.todo)
    const [getUpdatedTodoId, setUpdatedTodoId] = useState(null);



    function handleteAddTodo(){
        dispatch(addTodo(currentTodo))
        setCurrentTodo("")
    }

    function handleUpdateTodo(getCurrentTodo){
        setUpdatedTodoId(getCurrentTodo.id)
        setCurrentTodo(getCurrentTodo.title)



    }

function handledelete(currentId){
    dispatch(deleteTodo(currentId))
}

    return (
    <div>
        <input type="text" name="todo" value={currentTodo} onChange={(e) => setCurrentTodo(e.target.value)} placeholder="Enter your todo" />
        <button onClick={handleteAddTodo} disabled={currentTodo === ""} >
             {

                    getUpdatedTodoId !== null ? "Edit Todo" : "Add todo"
            } 
            </button>
        <ul>

            {todoList.map((e) => (
                <li key={e.id} style={{display:"flex", margin:'1rem'}}>
                    <p>{e.title} </p>
                    <button onClick={ () => handledelete(e.id)}>Delete </button>
                    <button onClick={ () => handleUpdateTodo(e)}>Update Todo </button>

                        </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList
