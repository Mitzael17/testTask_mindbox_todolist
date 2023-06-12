import {ChangeEvent, ForwardedRef, forwardRef, useContext} from 'react';
import {TodoListChangeContext} from "../contexts/TodoListContext";
import {Task as TaskType, TodoListActionTypes} from "../types";
import classes from "../styles/modules/task.module.scss";

const Task = forwardRef(({id, text, isCompleted}: TaskType, ref: ForwardedRef<HTMLDivElement>) => {

    const {dispatchTasks} = useContext(TodoListChangeContext);

    return (
        <div ref={ref} className={`${classes.task} ${isCompleted ? classes.completed : ''} border-bottom paddings-step`}>
            <label className={classes.checkbox}>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={handlerChange}/>
                <span></span>
            </label>
            <div className={classes.text}>{text}</div>
        </div>
    );

    function handlerChange(event: ChangeEvent<HTMLInputElement>) {

        if(event.currentTarget.checked) {

            dispatchTasks({
                type: TodoListActionTypes.Complete,
                payload: {id}
            });

            return;

        }

        dispatchTasks({
            type: TodoListActionTypes.Activate,
            payload: {id}
        });

    }

});

export default Task;