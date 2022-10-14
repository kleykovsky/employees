import {Component, useState} from "react";
import './employees-add-form.css';
import ButtonSubmit from "../UI/Buttons/ButtonSubmit";
import ButtonClick from "../UI/Buttons/ButtonClick";


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length < 3 || !this.state.salary) return
        this.props.addNewPerson(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: '',
        })
    }

    clrVal = () => {
            this.setState(({
                name:  this.state.name = '',
                salary:  this.state.salary = '',
            }))
    }


    render() {
        let className = 'form-control new-post-label'
        const {title, classNam, classSal} = this.props;
        const {name, salary} = this.state;

        return(
            <div className={'appAddForm'}>
                <h3>{title}</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                           className={className}
                           placeholder="Как его зовут?"
                           name={'name'}
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className={className}
                           placeholder="З/П в $"
                           name={'salary'}
                           value={salary}
                           onChange={this.onValueChange}
                    />
                    <ButtonSubmit text={'Add new Person'}/>
                </form>
                <ButtonClick text={'Clear'}
                             rend={this.clrVal}
                />
            </div>
        )
    }
}
export default EmployeesAddForm;