import '@testing-library/jest-dom'
import {act, fireEvent, render, screen} from "@testing-library/react";
import App from "../App";

describe('Todolist test', () => {

    it('Create and delete task', async () => {

        render(<App />);

        const input: HTMLInputElement = screen.getByRole('textbox');
        let button: HTMLButtonElement|null = screen.queryByRole('button');

        expect(input).toBeInTheDocument();
        expect(button).toBeNull();

        await act( async () => {
            fireEvent.change(input, {target: {value: 'new task'}});
        })

        await act( async () => {

            button = screen.getByRole('button') as HTMLButtonElement;

            expect(button).toBeInTheDocument();

            fireEvent.click(screen.getByRole('button'));

        })

        const task = screen.getByText('new task');

        expect(input.value).toEqual('');
        expect(task).toBeInTheDocument();

        const label: Element|null = task.previousElementSibling;
        const clearButton = screen.getByText(/clear completed/i);

        expect(label).toBeInTheDocument();
        expect(clearButton).toBeInTheDocument();

        await act( async () => {

            fireEvent.click(clearButton);

        })

        expect(screen.getByText('new task')).toBeInTheDocument();

        await act( async () => {

            fireEvent.click(label as Element);

        })

        await act( async () => {

            fireEvent.click(clearButton);

        })

        expect(screen.getByText('0 items left')).toBeInTheDocument();

    });

});