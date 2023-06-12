import {Task, TodoListActions, TodoListStatusFilter} from "../index";
import {Dispatch, SetStateAction} from "react";

export interface TodoListContextValues {

    tasks: Task[],
    filteredTasks: Task[],
    statusFilter: TodoListStatusFilter

}

export interface TodoListChangeContextValues {

    dispatchTasks: Dispatch<TodoListActions>,
    setStatusFilter: Dispatch<SetStateAction<TodoListStatusFilter>>

}