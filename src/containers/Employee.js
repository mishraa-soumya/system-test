import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddEmployee from '../components/AddEmployee'
import {addEmp,deleteEmp,updateEmp} from '../actions/index'
import EmployeeList from '../components/EmployeeList'

class Employee extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            update: false,
            empData: ''
        }

        this.onEditHandler = this.onEditHandler.bind(this);
        this.clearEmpData = this.clearEmpData.bind(this);
    }

    onEditHandler (id) {
        let empData = this.props.employeeData.data.filter((item) => {
            return item.id === id
        })
        this.setState({
            empData: empData
        })
    }

    clearEmpData () {
        this.setState({
            empData: ''
        })
    }

    render () {
        return (
            <div className="container">
                <AddEmployee {...this.props } empData={this.state.empData} clearEmpData={this.clearEmpData} />
                <EmployeeList { ...this.props } updateParentHandler={this.onEditHandler}  />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employeeData: state.employeeData
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({addEmp,deleteEmp,updateEmp},dispatch)
)

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Employee)