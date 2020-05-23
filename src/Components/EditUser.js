import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:this.props.editUserObject.name,
            phone:this.props.editUserObject.phone,
            id:this.props.editUserObject.id,
            permission: parseInt(this.props.editUserObject.permission,10)
        }

    }

    ischange  = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({ [name]:value});        
    }
    
    clickSave = () => {
        var editedObject = {}
        editedObject.id = this.state.id 
        editedObject.name = this.state.name
        editedObject.phone = this.state.phone
        editedObject.permission = this.state.permission 
        
        // console.log('EditUser.js: ',editedObject);
        
        this.props.changeEditUserStatus()
        this.props.getEditUserData(editedObject)
    }

    render() {
        return (
                <div className="col-12 p-0">
                        <form >
                            <div className="card border-default mb-3 mt-2 bg-warning" >                        
                            <div className="card-header text-white text-center">Edit user information</div>
                            <div className="card-body text-primary">
                            <div className="form-group">                        
                            <input defaultValue={this.props.editUserObject.name}  name = 'name' type="text" 
                                   onChange = {  (event) => this.ischange(event) }
                             className="form-control" placeholder="username" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">                        
                            <input   defaultValue={this.props.editUserObject.phone}  name = 'phone'  type="text"
                                     onChange = {  (event) => this.ischange(event) }
                              className="form-control" placeholder="phone" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">                        
                            <select  defaultValue={this.props.editUserObject.permission}
                                     onChange = {  (event) => this.ischange(event) }
                                name = 'permission'  className="custom-select" required>
                                {/* <option value={0} >Choose Authoriztion</option> */}
                                <option value={1}>Amin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>                      
                            </div>
                            <div className="form-group">
                            <input value ="Save"  onClick = {() => this.clickSave()} type ='reset' className="btn btn-block btn-danger" />
                                
                            </div>
                            </div>
                            </div>
                        </form>
                    </div>
        );
    }
}

export default EditUser;