import {Component, useState} from "react";
import './emloyees-add-form.css';
import ButtonSubmit from "../UI/Buttons/ButtonSubmit";
import ButtonCircle from "../UI/Buttons/ButtonCircle";
import ButtonSquare from "../UI/Buttons/ButtonSquare";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            classNam: '',
            classSal: '',
            placeholderName:'Как его зовут?',
            placeholderSalary: 'З/П в $',
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
                placeholderName:  this.state.placeholderName = 'Заполните пожалуйста имя!',
                placeholderSalary: this.state.placeholderSalary = 'Заполните пожалуйста зарплату!'
            }))
        } else {
            this.setState(({
                classNum: this.state.classNam = false,
                classSal: this.state.classSal = false,
                placeholderName:  this.state.placeholderName = 'Как его зовут?',
                placeholderSalary: this.state.placeholderSalary = 'З/П в $'
            }))
        }
    }

    render() {
        const {title} = this.props;
        const {name, salary, classNam, classSal, placeholderName, placeholderSalary} = this.state;
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
                           placeholder={placeholderName}
                           name={'name'}
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className={className}
                           placeholder={placeholderSalary}
                           name={'salary'}
                           value={salary}
                           onChange={this.onValueChange}
                    />
                    <ButtonSubmit text={'Add new Person'}
                                  check={this.checkValueInput}
                    />
                </form>
                <wrapperBtn className={'wrapperBtn'}>
                    <ButtonCircle text={'Clear'}
                                  rend={this.clrVal}/>
                    <ButtonSquare text={'Change color'}/>
                </wrapperBtn>

            </div>
        )
    }
}
export default EmployeesAddForm;