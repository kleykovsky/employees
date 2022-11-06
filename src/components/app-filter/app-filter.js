import './app-filter.css';
const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return(
            <button className={`btn ${clazz}`}
                    type={'button'}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })
    return (
        <div className={'btn-group'}>
            {buttons}
            {/*<button className={active ? 'btn btn-light' : 'btn btn-outline-light'}*/}
            {/*type={'button'}*/}
            {/*onClick={ filterMore?? filterRise?? filterAll}*/}
            {/*>*/}
            {/*    {txt}*/}
            {/*</button>*/}
        </div>
    )
}
export default AppFilter;
// return (
//     <div className={'btn-group'}>
//         <button className={active ? 'btn btn-light' : 'btn btn-outline-light'}
//                 type={'button'}
//                 onClick={ filterMore?? filterRise?? filterAll}
//         >
//             {txt}
//         </button>
//     </div>
// )