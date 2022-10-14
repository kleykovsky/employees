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
            classNam: false,
            classSal: false,
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

    checkValueInput = () => {
        if (this.state.classNam.length < 3 || !this.state.salary) {
            this.setState(({
                classNum: this.state.classNam = true,
                classSal: this.state.classSal = true,
            }))
        } else {
            this.setState(({
                classNum: this.state.classNam = false,
                classSal: this.state.classSal = false,
            }))
        }
    }

    render() {
        const {title} = this.props;
        const {name, salary, classNam, classSal} = this.state;
        let className = 'form-control new-post-label'
        if(classNam) className += ' empty'
        if(classSal) className += ' empty'

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
                    <ButtonSubmit text={'Add new Person'}
                                  check={this.checkValueInput}
                    />
                </form>
                <ButtonClick text={'Clear'}
                             rend={this.clrVal}
                />
            </div>
        )
    }
}
export default EmployeesAddForm;