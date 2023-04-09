import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}

            {/* runs it as javascript code & retuns it */}
            
            {todos.map(todo => {
            return (

        // following props are passed in through {...todo};                
            // id={todo.id} 
            // completed={todo.completed} 
            // title={todo.title} 

                <TodoItem 
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                />
            )
            })}
        </ul>
    )
}