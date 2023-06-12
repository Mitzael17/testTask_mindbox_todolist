import {useContext} from 'react';
import {TodoListContext, TodoListChangeContext} from "../contexts/TodoListContext";
import {TodoListActionTypes} from "../types";

const TodoListMenu = () => {

    const {tasks, statusFilter} = useContext(TodoListContext);
    const {dispatchTasks, setStatusFilter} = useContext(TodoListChangeContext);

    const hasCompletedTasks = tasks.find(task => task.isCompleted) !== undefined;

    return (
        <div className='todolist__menu'>
            <div>
                {getQuantityUncompletedTasks()} items left
            </div>
            <div className='todolist__filterButtons'>
                <div
                    onClick={() => setStatusFilter('all')}
                    className={`cursor-pointer todolist__button ${statusFilter === 'all' ? 'active' : ''}`}
                >
                    All
                </div>
                <div
                    onClick={() => setStatusFilter('active')}
                    className={`cursor-pointer todolist__button ${statusFilter === 'active' ? 'active' : ''}`}
                >
                    Active
                </div>
                <div
                    onClick={() => setStatusFilter('completed')}
                    className={`cursor-pointer todolist__button ${statusFilter === 'completed' ? 'active' : ''}`}
                >
                    Completed
                </div>
            </div>
            <div
                className={`cursor-pointer ${hasCompletedTasks ? '' : 'hide'}`}
                onClick={handlerClearCompletedTasks}
            >
                Clear completed
            </div>
        </div>
    );

    function handlerClearCompletedTasks() {

        dispatchTasks({type: TodoListActionTypes.ClearCompleted});

    }

    function getQuantityUncompletedTasks() {

        return tasks.reduce( (quantity, task) => {

            return task.isCompleted ? quantity : quantity + 1;

        }, 0);

    }

};

export default TodoListMenu;