import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : false,
            permission:1,
            // item : '',

        }
    }

    isChange  = (data) => {
        const name = data.target.name
        const value = data.target.value
        // console.log(name +' : '+value);
        this.setState({
            [name]:value
        });

    }

    showForm = ()=> {
        // console.log(this.state);
        if(this.props.showForm === true){
            return (
                <div className="col">
                    <form >
                              <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>                        
                        <div className="card-header">Add new</div>
                        <div className="card-body text-primary">
                        <div className="form-group">                        
                        <input onChange = {(event) => {this.isChange(event)}} name = 'name' type="text"  className="form-control" placeholder="username" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">                        
                        <input onChange = {(event) => {this.isChange(event)}}  name = 'phone'  type="text"  className="form-control" placeholder="phone" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">                        
                        <select onChange = {(event) => {this.isChange(event)}}   name = 'permission'  className="custom-select" required>
                            {/* <option value={0} >Choose Authoriztion</option> */}
                            <option value={1}>Amin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>Normal</option>
                        </select>                      
                        </div>
                        <div className="form-group">
                        <input value ="Add new"  type ='reset' className="btn btn-block btn-primary" 
                        onClick = { (data) => this.props.getNewUser(this.state.name,this.state.phone,this.state.permission)}/>
                            
                        </div>
                        </div>
                        </div>
                    </form>
                </div>
                )
        }else{
            return false
        }        
    }


    render() {
        return (
                <div>                    
                    { this.showForm()}
                </div>
                
        );
    }
}

export default AddUser;