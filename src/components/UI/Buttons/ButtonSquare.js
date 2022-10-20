import classes from './ButtonsStyle.module.scss';

const ButtonSquare = ({change, text, changeColor}) => {
    return (
        <button
            className={classes.btnSquare}
            onClick={changeColor}>
            {text}
        </button>
    )
}

export default ButtonSquare;