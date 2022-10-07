import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import './App.css';

function App() {

    const data = [
        {name: 'Alex K.', salary: 1500, increase: false, id: 1, },
        {name: 'John S.', salary: 1200, increase: false, id: 2, },
        {name: 'Anna R.', salary: 2000, increase: true, id: 3,  },
    ]

    return(
        <div className='App'>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter txt={'Все сотрудники'} active={false}/>
                <AppFilter txt={'На повышение'} active={true}/>
                <AppFilter txt={'З/П больше 1000$'} active={false}/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm title={'Добавьте нового сотрудника'} submit={'Подтвердить'}/>
        </div>
    )
}
export default App;