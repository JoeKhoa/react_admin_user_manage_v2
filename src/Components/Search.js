import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowAddBtn : true,
        }

    }

    // get edit user data from table row
    getEditUserData  = (data) => {
        this.props.getEditedUserDataFromApp(data)
    }

    isChangeSearchText = (event)=> {
        var value = event.target.value
        var name = event.target.name
        // console.log(value);
        this.setState({ [name]:value });
        this.props.getSeachedText(value)   
    }

    hideClicked = (event) =>{
        this.props.showFormFromApp();
        this.setState({
            ShowAddBtn : !this.state.ShowAddBtn
        });
    }

    showBtn = () => {
        if( this.state.ShowAddBtn === true){
            return <div onClick = { (event) => this.hideClicked(event) } className="btn btn-block btn-outline-primary">Add new</div>
        }else {
            return <div onClick = { (event) => this.hideClicked(event) }  className="btn btn-block btn-outline-info">Close </div>

        }
    }

    showEditForm  = () => {
        // console.log(this.props.EditUserStatus);
        if( this.props.EditUserStatus === true ){
            return <EditUser changeEditUserStatus = {() => this.props.changeEditUserStatus()}
                        editUserObject = {this.props.editUserObject}
                        getEditUserData = { (data) => this.getEditUserData(data)}
                    />
        }
    }

    render() {

        return (
            <div className="col-12">

                {this.showEditForm()}

                <div className="col-12 p-0">
                    <div className="form-group mb-3">
                        <div className="btn btn-group p-0 col-12">
                            <input type="text" className="form-control" name = 'searchInput'
                            onChange = {(event) => this.isChangeSearchText(event) }
                             aria-describedby="helpId"  />
                            <div className="btn btn-info" onClick = { (data) => this.props.getSeachedText(this.state.searchInput) } >Search</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-0">
                    {this.showBtn()}
                </div>
                <div className="col-12 p-0">
                    <hr className="m-4" />
                </div>
          </div>
        );
    }
}

export default Search;