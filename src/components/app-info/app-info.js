// import './app-info.module.css';
import classes from "./app-info.module.css";
import ButtonSquare from "../UI/Buttons/ButtonSquare";
import styled from "styled-components";
import {useState} from "react";


const AppInfo = (props) => {

    const {txtH1,
           txtH2,
           txtH3,
           employees,
           increased,
           curData,
           curTime,} = props
    return (
        <div className={classes.appInfo}>
            <div className={classes.wrapper}>
                <ButtonSquare text={'Switch color'}/>
            </div>
            <span className={classes.appSpanDate}>
                {`Текущая дата: <${curData}> время: <${curTime}>`}
            </span>

            <h1>{txtH1} </h1>
            <h2>{txtH2} {employees} </h2>
            <h2>{txtH3} {increased} </h2>
        </div>
    )
}
export default AppInfo;