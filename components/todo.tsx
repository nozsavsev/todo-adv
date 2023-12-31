import { EditTodoButton } from './SearchBar/EditTodoButton'
import styles from './todo.module.css'



export default function TodoControl({ todo, setTodo }: { todo: Todo, setTodo: (todo: Todo) => void }) {

    return <div className={styles.todoContainer}>

        <EditTodoButton todo={todo} updateTodo={setTodo} />

        <div className={styles.nameContent}>
            <h3>{todo.title}</h3>

            <p style={{
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                wordWrap: 'break-word',
            }}>{todo.content}</p>
        </div>

        <input type="checkbox" style={{
            width: 30,
            height: 30,
        }} checked={todo.completed} onChange={(e) => {
            setTodo({
                ...todo,
                completed: e.target.checked
            })
        }} />

    </div>
}