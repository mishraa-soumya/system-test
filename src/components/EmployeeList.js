import React, {Component} from 'react'

class EmployeeList extends Component {

   constructor (props) {
    super(props)
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onEditHandler   = this.onEditHandler.bind(this);
   }

   onDeleteHandler (id) {
        let self = this;
        self.props.deleteEmp(id);
   }

   onEditHandler (id) {
    this.props.updateParentHandler(id);
   }

   render() {
       if (this.props.employeeData.hasOwnProperty('data') && this.props.employeeData.data.length > 0 ) {
            let employeeData = this.props.employeeData.data;
            return (
                <div className="list-emp-wrapper">
                    <h3 className="emp-form-label">List of Employees</h3>
                     <div className="emp-table-div">
                       <table>
                           <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Full Name</th>
                            <th>Email Address</th>
                            <th>Mobile No.</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                            <EmpRows 
                                employeeData={ employeeData }
                                onDeleteClick={this.onDeleteHandler}
                                onEditClick={this.onEditHandler}
                            />
                        </table>  
                     </div>      
                </div>
            )
        } else {
            return null;
        }
    }
}

const EmpRows = ({ employeeData, onDeleteClick, onEditClick}) => {
    return (
        <tbody>
            {
                employeeData.map((row, index) => 
                {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{row.fullName}</td>
                            <td>{row.email}</td>
                            <td>{row.mobile}</td>
                            <td>
                                <a onClick={ () => onEditClick(row.id) }> Edit </a>
                                <span> | </span>
                                <a onClick={ () => onDeleteClick(row.id) }> Delete </a>
                            </td>
                        </tr>
                    )
                })
             }
         </tbody>   
        
    )
}

export default EmployeeList;