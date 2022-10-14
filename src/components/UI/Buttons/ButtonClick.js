import classes from "./ButtonsStyle.module.css";

const ButtonClick = ({text, rend}) => {
    return(
        <button className={classes.btnClick}
                onClick={rend}>
            {text}
        </button>
    )
}

export default ButtonClick;