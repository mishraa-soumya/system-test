import React, { Component } from 'react'

class AddEmployee extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            id: '',
            fullName: '',
            email: '',
            mobile: ''
        }
        this.onBlurHandler   = this.onBlurHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onBlurHandler (event) {
        const target = event.target;
        const value = target.type === 'text' ? target.value : '';
        const name  = target.name;

        if (target.type === 'text') {
            this.setState({
                [name]: value
            },
            
            () => {
                this.fullName.value = this.state.fullName;
                this.email.value = this.state.email;
                this.mobile.value = this.state.mobile;
            });

            
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.empData.length > 0 ) {
            this.setState({
                id: parseInt(nextProps.empData[0].id, 10),
                fullName: nextProps.empData[0].fullName,
                email: nextProps.empData[0].email,
                mobile: nextProps.empData[0].mobile
            })
        }
    }

    onSubmitHandler (e) {
        e.preventDefault();
        if (this.empId.value === '') {
            this.props.addEmp(this.state);
        }else{
            this.props.updateEmp(parseInt(this.empId.value, 10 ), this.state)
            this.props.clearEmpData();
       }
        this.setState({
            fullName: '',
            email: '',
            mobile: ''
        })
        this.empId.value = ''
        this.fullName.value = ''
        this.email.value = ''
        this.mobile.value = ''
    }

    render () {
        let empData = this.props.empData !== "" ? this.props.empData: '';
        let formlabel = 'Add Employee';
        if(empData !== '') {
            formlabel = 'Edit Employee';
            this.empId.value    = empData[0].id;
            this.fullName.value = empData[0].fullName;
            this.email.value    = empData[0].email;
            this.mobile.value   = empData[0].mobile;
        }

        return (
            <div className="emp-form">
                <h3 className="emp-form-label">{ formlabel }</h3>
                <form onSubmit={ e => this.onSubmitHandler(e) } >
                    <input type="hidden" name="empId" ref={ (input) => this.empId = input } />
                    <div className="form-row">
                        <div className="form-col">
                            <label>Full Name</label>
                        </div>
                        <div className="form-col">
                            <input type="text" name="fullName" onBlur={ this.onBlurHandler } ref={ (input) => this.fullName = input } />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col">
                            <label>Email Address</label>
                        </div>
                        <div className="form-col">
                            <input type="text" name="email" onBlur={ this.onBlurHandler } ref={ (input) => this.email = input } />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col">
                            <label>Mobile No.</label>
                        </div>
                        <div className="form-col">
                            <input type="text" name="mobile" onBlur={ this.onBlurHandler } ref={ (input) => this.mobile = input } />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-col">
                            <button type="submit" className="btn-submit"> Submit </button>    
                        </div>
                        
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default AddEmployee;