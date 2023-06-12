import {Dispatch, Reducer, useEffect, useReducer} from "react";

export function useLocalStorageReducer<T, A>(name: string, initialValue: T, reducer: Reducer<T, A>): [T, Dispatch<A>] {

    const [state, dispatch] = useReducer(reducer, (() => {

        const localStorageValue = window.localStorage.getItem(name);

        return localStorageValue ? JSON.parse(localStorageValue) as T : initialValue;

    })());

    useEffect(() => {

        window.localStorage.setItem(name, JSON.stringify(state));

    }, [name, state]);

    return [state, dispatch];

}