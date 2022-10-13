import classes from "./ButtonsStyle.module.css";

const ButtonSubmit = ({text}) => {
    return(
        <button
            className={classes.btnSubmit}
        >
            {text}
        </button>
    )
}

export default ButtonSubmit;