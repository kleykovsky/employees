import classes from './ButtonsStyle.module.scss';

const ButtonSquare = ({change, text}) => {
    return (
        <button
            className={classes.btnSquare}
            onClick={change}>
            {text}
        </button>
    )
}

export default ButtonSquare;