import {TodoListChangeContext, TodoListContext} from "../../contexts/TodoListContext";
import {useLocalStorageReducer} from "../../hooks/useLocalStorageReducer";
import {Task, TodoListActions, TodoListActionTypes, TodoListStatusFilter} from "../../types";
import {useState} from "react";

const TodoListProvider = ({children}: {children: JSX.Element}) => {

    const [tasks, dispatchTasks] = useLocalStorageReducer<Task[], TodoListActions>('tasks', [], reducer);

    const [statusFilter, setStatusFilter] = useState<TodoListStatusFilter>('all');
    const filteredTasks = getFilteredTasks();

    return (
        <TodoListContext.Provider value={{tasks, filteredTasks, statusFilter}}>
            <TodoListChangeContext.Provider value={{dispatchTasks, setStatusFilter}}>
                {children}
            </TodoListChangeContext.Provider>
        </TodoListContext.Provider>
    );

    function reducer(state: Task[], action: TodoListActions): Task[] {

        switch (action.type) {

            case TodoListActionTypes.Add: {

                return [
                    ...state,
                    {
                        ...action.payload,
                        isCompleted: false,
                        id: JSON.stringify(new Date()),
                    }
                ];

            }

            case TodoListActionTypes.ClearCompleted: {

                return state.filter( task => !task.isCompleted);

            }

            case TodoListActionTypes.Activate: {

                return state.map( task => {

                    if(task.id === action.payload.id) task.isCompleted = false;

                    return task;

                });

            }

            case TodoListActionTypes.Complete: {

                return state.map( task => {

                    if(task.id === action.payload.id) task.isCompleted = true;

                    return task;

                });

            }

            default: {
                console.log('Unknown todolist action type!')
                return state;
            }

        }

    }

    function getFilteredTasks() {

        if(statusFilter === 'active') return tasks.filter( task => !task.isCompleted);

        if(statusFilter === 'completed') return tasks.filter( task => task.isCompleted);

        return tasks;

    }

};

export default TodoListProvider;