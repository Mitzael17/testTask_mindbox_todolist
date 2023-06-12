import {FormEvent, useContext} from 'react';
import Input from "./UI/Input";
import Button from "./UI/Button";
import {useLocalStorageState} from "../hooks/useLocalStorageState";
import {TodoListChangeContext} from "../contexts/TodoListContext";
import {TodoListActionTypes} from "../types";

const TodoListForm = () => {

    const {dispatchTasks} = useContext(TodoListChangeContext);
    const [inputValue, setInputValue] = useLocalStorageState<string>('unwrittenTodo', '');

    return (
        <form onSubmit={handlerSubmit} className="todolist__form todolistForm">
            <Input
                className='todolistForm__input border-bottom'
                value={inputValue}
                setValue={setInputValue}
                placeholder='What needs to be done?'
            />
            {inputValue && <Button className='todolistForm__button'>Save</Button>}
        </form>
    );

    function handlerSubmit(event: FormEvent): void {

        event.preventDefault();

        if(inputValue.length === 0) return;

        dispatchTasks({type: TodoListActionTypes.Add, payload: {text: inputValue}})

        setInputValue('');

    }

};

export default TodoListForm;