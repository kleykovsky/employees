import {Component} from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from    "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import nextId from "react-id-generator";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex K.', salary: 1500, increase: false, id: nextId()},
                {name: 'John S.', salary: 1200, increase: false, id: nextId()},
                {name: 'Anna R.', salary: 2000, increase: true, id: nextId()},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // console.log(data)
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            return{
                data: data.filter(item => item.id !== id),

            }

        })
        // console.log(id)
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return{
                data: newArr
            }
        });
    }


    render() {
        return(
            <div className='App'>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter txt={'Все сотрудники'} active={false}/>
                    <AppFilter txt={'На повышение'} active={true}/>
                    <AppFilter txt={'З/П больше 1000$'} active={false}/>
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployeesAddForm
                    title={'Добавьте нового сотрудника'}
                    text={'Submit'}
                    addNewPerson={this.addItem}
                    textBtn={'Click'}
                    ren={() => console.log('click')}

                />
            </div>
        )
    }
}
export default App;