import React,{ Component} from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import JsonUserData from './data.json'
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm : false,
      data : JsonUserData,
      searchedText : '',
      EditStatus : false,
      editUserObject : {},
      editedData: {}
    };
  
  }
  
  
  componentWillMount() {
    if ( localStorage.getItem('dataUser') === null ){ 
      localStorage.setItem("dataUser", JSON.stringify(JsonUserData))      
    }else {
      var tempData = JSON.parse(localStorage.getItem('dataUser'))
      this.setState({ data : tempData }); 
    }
  }
  


  // to show-hide edit user form
  changeEditUserStatus  = () => {
    this.setState({
      EditStatus : !this.state.EditStatus
    });
  }

  // to get created new user data
  getNewUser  = (name,phone,permission) => {
      var item  = {}
      item.id = uuidv1()
      item.name = name
      item.phone = phone
      item.permission = permission
      // console.log('item: ',item);
      var items = this.state.data
      if ( item.name != null ||  items.name != undefined){
        items.push(item)
        this.setState({
          data : items
        })
        console.log(this.state.data);
        localStorage.setItem("dataUser",JSON.stringify(items))
        // item.name = null
      }else{
        return false
      }


    }

  // to get searched text
  getSeachedText = (text)=> {
    this.setState({
      searchedText : text
    });
  }
  
  // to show-hide the created new user form
  changeAppShowForm = () => { 
      this.setState({
        showForm : !this.state.showForm
      });
  }

  // to get data from line contained edit-button, Components : App->TableData->TableDataRow
  editFuncFromApp = (willEditData) => {
     this.setState({
      editUserObject : willEditData
     });
  }

  getEditedUserDataFromApp = (EditedData) => {
    EditedData.permission = parseInt(EditedData.permission,10)  // change to Int
      this.state.data.forEach( (value,key) =>{
          if ( value.id === EditedData.id ){            
            const updatedData  = this.state.data
            updatedData[key] = EditedData
            localStorage.setItem("dataUser",JSON.stringify(updatedData))
            this.setState({
              data:updatedData
            });

          }
      });
  }

  // get Id from table to remove
  deleteUser  = (userId) => {
    var tempData = this.state.data
    tempData  = tempData.filter(item => item.id !== userId)
    this.setState({ data:tempData });
    localStorage.setItem("dataUser",JSON.stringify(tempData))

  }


  render() {
    // localStorage.setItem("name","Johny English" )
    // console.log(localStorage.getItem('name'))
    // localStorage.removeItem("name")
    var SearchedDataArr = []
      
      this.state.data.map( (value,key) =>{
        if( value.name.indexOf(this.state.searchedText) !== -1){
          SearchedDataArr.push(value)
        }
        return true
      }) 



    // console.log(SearchedDataArr);
    return (
      <div>
          <Header/>
          <div className="SearchForm">
            <div className="container">
                <div className="row">

                    <Search  showFormFromApp = {() => this.changeAppShowForm()}
                       getSeachedText = {(text) => this.getSeachedText(text)}
                       EditUserStatus = {this.state.EditStatus}
                       changeEditUserStatus = {() => this.changeEditUserStatus()}
                       editUserObject = {this.state.editUserObject}
                       getEditedUserDataFromApp = {  (data) => this.getEditedUserDataFromApp(data)}
                       />

                    <TableData data = {SearchedDataArr}
                      editFuncFromApp = { (editData) =>this.editFuncFromApp(editData) } 
                      EditUserStatus = {this.state.EditStatus}
                      changeEditUserStatus = {() => this.changeEditUserStatus()}
                      deleteUser = { (idUser) => this.deleteUser(idUser)}

                    />

                    <AddUser showForm = { this.state.showForm }
                     getNewUser = { (name,phone,permission) => this.getNewUser(name,phone,permission)}                   
                     />

                </div>
            </div>
          </div>
      </div>
    );
  }

}

export default App;

