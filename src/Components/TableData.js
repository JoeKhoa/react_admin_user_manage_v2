import React, { Component } from 'react';
import TableDataRow from './TableDataRow'

class TableData extends Component {
    
    // send data to TableDataRow
    mappingDataUser = () => this.props.data.map( (value,key) =>(
            <TableDataRow   userId = {value.id}
            userName = {value.name} 
            key = {key}
            stt = {key+1}
            phone = {value.phone}
            permission = {value.permission}
            editFuncFromTableData = {  (editData) => this.props.editFuncFromApp(value) }
            changeEditUserStatus = {() => this.props.changeEditUserStatus()}
            deleteBtn = { (idUser) => this.props.deleteUser(idUser)}
            /> )                                
         )
         
    // get Id from table_row to remove  Need it ?
    // deleteBtn  = (userId) => {
    //     this.props.deleteBtn(userId)
    // }

    render() {
        // console.log(this.props.data);
        return (
                <div className="col">
                        <table className="table table-striped table-inverse table-{1:striped|sm|bordered|hover|inverse}">
                            <thead className="thead-inverse">
                                <tr>
                                <th>Order</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Authorization</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.mappingDataUser()}
                            </tbody>
                            
                        </table>
                </div>
                    
      );
    }
}

export default TableData;