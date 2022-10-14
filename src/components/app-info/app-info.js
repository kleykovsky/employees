import './app-info.css';


const AppInfo = ({txtH1, txtH2, txtH3, employees, increased, curData}) => {
    return (
        <div className={'app-info'}>
            <span>{`Текущая дата: ${curData}`}</span>
            <h1>{txtH1} </h1>
            <h2>{txtH2} {employees} </h2>
            <h2>{txtH3} {increased} </h2>
        </div>
    )
}
export default AppInfo;