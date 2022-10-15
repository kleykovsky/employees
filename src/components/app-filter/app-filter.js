import './app-filter.css';
const AppFilter = ({txt, active, filterRise, filterMore, filterAll}) => {
    return (
        <div className={'btn-group'}>
            <button className={active ? 'btn btn-light' : 'btn btn-outline-light'}
            type={'button'}
            onClick={ filterMore?? filterRise?? filterAll}
            >
                {txt}
            </button>
        </div>
    )
}
export default AppFilter;