import {createContext} from "react";
import {TodoListChangeContextValues, TodoListContextValues} from "../types/contexts";

export const TodoListContext = createContext<TodoListContextValues>({tasks: [], filteredTasks: [], statusFilter: 'all'});

export const TodoListChangeContext = createContext<TodoListChangeContextValues>({} as TodoListChangeContextValues);