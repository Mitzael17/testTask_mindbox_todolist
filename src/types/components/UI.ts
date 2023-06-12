import {Dispatch, InputHTMLAttributes, SetStateAction} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

    value: string,
    setValue: Dispatch<SetStateAction<string>>

}