import {Component, useState} from "react";
import './employees-add-form.css';



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

    render() {
        const {title, text, textBtn, ren} = this.props;
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
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light"
                            >{text}
                    </button>
                    <button
                        type='button'
                        className="btn btn-outline-light"
                        onClick={ren}>
                            {textBtn}
                    </button>
                </form>
            </div>
        )
    }
}
export default EmployeesAddForm;