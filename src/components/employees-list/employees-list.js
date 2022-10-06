import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployeesListItem key={id} {...itemProps}/>
        // name={item.name} salary={item.salary} increase={item.increase}
    )
    })
    return(
        <ul className={'app-list list-group'}>
            {/*<EmployeesListItem name={'Alex Kle'} salary={1500}/>*/}
            {/*<EmployeesListItem name={'John Smith'} salary={1800}/>*/}
            {/*<EmployeesListItem name={'Ann Rose'} salary={1200}/>*/}
            {elements}
        </ul>
    )
}
export default EmployeesList;