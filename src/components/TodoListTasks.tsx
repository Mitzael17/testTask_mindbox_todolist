import {createRef, memo, useContext} from 'react';
import {TodoListContext} from "../contexts/TodoListContext";
import Task from "./Task";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TodoListTasks = memo(() => {

    const {filteredTasks} = useContext(TodoListContext);

    const tasksElements = filteredTasks.map( task => {

        const nodeRef = createRef<HTMLDivElement>();

        return (
            <CSSTransition key={task.id} timeout={500} classNames='defaultTransitionGroupElement' nodeRef={nodeRef}>
                <Task ref={nodeRef} id={task.id} text={task.text} isCompleted={task.isCompleted} />
            </CSSTransition>
        )

    });

    return (
        <TransitionGroup className='border-bottom border-top'>
            {tasksElements}
        </TransitionGroup>
    );
});

export default TodoListTasks;