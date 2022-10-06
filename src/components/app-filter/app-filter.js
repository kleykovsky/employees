import './app-filter.css';
const AppFilter = ({txt, active}) => {
    return (
        <div className={'btn-group'}>
            <button className={active ? 'btn btn-light' : 'btn btn-outline-light'}
            type={'button'}>
                {txt}
            </button>
        </div>
    )
}
export default AppFilter;