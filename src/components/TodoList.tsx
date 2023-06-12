import TodoListForm from "./TodoListForm";
import TodoListTasks from "./TodoListTasks";
import TodoListMenu from "./TodoListMenu";

const TodoList = () => {

    return (
        <div className='todolist'>
            <h1>todos</h1>
            <div className='todolist__body'>
                <TodoListForm  />
                <TodoListTasks />
                <TodoListMenu />
            </div>
        </div>
    );
};

export default TodoList;