export enum TodoListActionTypes {

    Add = 'add',
    ClearCompleted = 'clearCompleted',
    Complete = 'complete',
    Activate = 'activate'

}

export interface Task {

    id: string,
    text: string,
    isCompleted: boolean

}

type ActionMap<M extends { [index: string]: unknown }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        }
};

type TodoListPayload = {

    [TodoListActionTypes.Add]: Pick<Task, 'text'>,
    [TodoListActionTypes.Activate]: Pick<Task, 'id'>,
    [TodoListActionTypes.ClearCompleted]: undefined,
    [TodoListActionTypes.Complete]: Pick<Task, 'id'>,

};

export type TodoListActions = ActionMap<TodoListPayload>[keyof ActionMap<TodoListPayload>];

export type TodoListStatusFilter = 'all'|'active'|'completed';