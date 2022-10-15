import {Component} from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from    "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex K.', salary: 1500, increase: false, rise: false, id: 1},
                {name: 'John S.', salary: 1200, increase: false, rise: false, id: 2},
                {name: 'Anna R.', salary: 2000, increase: false, rise: false,  id: 3},
            ]
        }
        this.maxId = 4
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
    }

    addItem = (name, salary) => {

        const newItem = {
            name,
            salary,
            classNam: false,
            classSal: false,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return{
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id)
        //
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        //     return{
        //         data: newArr
        //     }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return{...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    //     console.log(`Rise this ${id}`);
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
        console.log(`Rise this ${id}`);
    }


    render() {

        setTimeout(() => {
            this.setState({
                curTime: curTime
            })
        },1000)

        const {curTime,} = this.state
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const currDate = new Date().toLocaleDateString()
        const time = new Date().toLocaleTimeString()

        return(
            <div className='App'>
                <AppInfo
                        txtH1={`Учет сотрудников в компании: ***`}
                        txtH2={'Общее число сотрудников:'}
                        txtH3={'Премию получат:'}
                        employees={employees}
                        increased={increased}
                        curData={currDate}
                        curTime={time}
                />
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter txt={'Все сотрудники'} active={false}/>
                    <AppFilter txt={'На повышение'} active={true}/>
                    <AppFilter txt={'З/П больше 1000$'} active={false}/>
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    // onToggleRise={this.onToggleRise}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    title={'Добавьте нового сотрудника'}
                    text={'Submit'}
                    addNewPerson={this.addItem}
                />
            </div>
        )
    }
}

export default App;