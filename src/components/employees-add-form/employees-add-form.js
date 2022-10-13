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
        this.props.addNewPerson(this.state.name, this.state.salary);
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
        const {title} = this.props;
        const {name, salary} = this.state;

        return(
            <div className={'appAddForm'}>
                <h3>{title}</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name={'name'}
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
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