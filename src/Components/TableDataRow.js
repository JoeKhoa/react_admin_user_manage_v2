import React, { Component } from 'react';

class TableDataRow extends Component {
    // change number to permission text Admin/Moderator/Normal
    permissionDefine(){
        if (this.props.permission === 1){
            return 'Admin'
        }else if(this.props.permission === 2){
            return 'Moderator'
        }else{
            return 'Normal'
        }

    }
    
    //
    editBtn  = () => {
        this.props.editFuncFromTableData()
        this.props.changeEditUserStatus()
    }

    render() {
    
        return (
                <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.phone}</td>
                <td>{this.permissionDefine()}</td>
                <td>
                    <div className="btn-group">
                    <div className="btn btn-warning" onClick ={ () => this.editBtn()} >
                        <i className="fa fa-edit" > Edit </i>
                    </div>
                    <div className="btn btn-danger" onClick = { (userId) => this.props.deleteBtn(this.props.userId)}>
                        <i className="fa fa-edit"> Delete </i>
                    </div>
                    </div>
                </td>
                </tr>

        );
    }
}

export default TableDataRow;