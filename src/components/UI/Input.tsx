import {InputProps} from "../../types/components/UI";
import classes from "../../styles/modules/UI/Input.module.scss";

const Input = ({setValue, value, className, ...props}: InputProps) => {
    return (
        <input
            {...props}
            className={`${className} ${classes.input}`}
            value={value}
            onChange={ event => setValue(event.currentTarget.value)}
        />
    );
};

export default Input;