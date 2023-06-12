import {Dispatch, SetStateAction, useEffect, useState} from "react";

export function useLocalStorageState<T>(name: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {

    const [state, setState] = useState<T>(() => {

        const localStorageValue = window.localStorage.getItem(name);

        return localStorageValue ? JSON.parse(localStorageValue) : initialValue;

    });

    useEffect(() => {

        const timer = setTimeout( () => {

            window.localStorage.setItem(name, JSON.stringify(state));

        }, 300);

        return () => clearTimeout(timer);

    }, [name, state]);

    return [state, setState];

}