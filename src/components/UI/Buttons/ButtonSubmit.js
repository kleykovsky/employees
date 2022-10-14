import classes from "./ButtonsStyle.module.css";

const ButtonSubmit = ({text, check}) => {
    return(
        <button
            className={classes.btnSubmit}
            onClick={check}>
            {text}
        </button>
    )
}

export default ButtonSubmit;