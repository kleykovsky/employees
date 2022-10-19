import classes from "./ButtonsStyle.module.scss";

const ButtonCircle = ({text, rend}) => {
    return(
        <button className={classes.btnCircle}
                onClick={rend}>
            {text}
        </button>
    )
}

export default ButtonCircle;