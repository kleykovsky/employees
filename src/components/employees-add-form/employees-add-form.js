import {Component} from "react";
import './emloyees-add-form.css';
import ButtonSubmit from "../UI/Buttons/ButtonSubmit";
import ButtonCircle from "../UI/Buttons/ButtonCircle";
import ButtonSquare from "../UI/Buttons/ButtonSquare";
import {ToggleButton} from "@mui/material";
import ButtonSwitch from "../UI/Buttons/ButtonSwitch";

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
            changeColor: false,

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

    changeColor = () => {
        if(this.state.changeColor === false) {
            this.setState(({
                changeColor: this.state.changeColor = true
            }))
        } else {
            this.setState(({
                changeColor: this.state.changeColo = false
            }))
        }
    }

    render() {
        const {title} = this.props;
        const {name, salary, classNam, classSal, placeholderName, placeholderSalary, changeColor} = this.state;
        let className = 'form-control new-post-label'
        if(classNam) className += ' empty'
        if(classSal) className += ' empty'
        let bgColor = 'appAddForm'
        if(changeColor) bgColor += ' bgColor';



        return(
            <div className={bgColor}>
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
                <div className={'wrapperBtn'}>
                    <ButtonCircle text={'Clear'}
                                  rend={this.clrVal}/>
                    <ButtonSwitch change={this.changeColor}/>
                    <ButtonSquare text={'Change color'}
                                  changeColor={this.changeColor}/>

                </div>
            </div>
        )
    }
}
export default EmployeesAddForm;