import {ButtonHTMLAttributes} from 'react';
import classes from "../../styles/modules/UI/Button.module.scss";

const Button = ({className, children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            {...props}
            className={`${className} ${classes.button}`}
        >
            {children}
        </button>
    );
};

export default Button;