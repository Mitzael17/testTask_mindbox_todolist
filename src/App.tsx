import {useEffect} from 'react';
import TodoList from "./components/TodoList";
import TodoListProvider from "./components/Providers/TodoListProvider";

const App = () => {

    // Set correct vh for Google mobile
    useEffect(() => {

        const handlerResize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        handlerResize();

        window.addEventListener('resize', handlerResize);

        return () => {
            window.removeEventListener('resize', handlerResize);
        };

    }, []);

    return (
        <TodoListProvider>
            <TodoList />
        </TodoListProvider>
    );
};

export default App;