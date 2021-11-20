import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {
  render() {
    let users = this.props.users.map((user,index) => <li key={index}>{user.username}</li>)
      //creates a variable called users that has a value of the users list found in props for the Users component
      // for each item in the users list it maps usign creates a list entry. where the key is the index of the item and the user's username is displayed.
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}


// mapStateToProps
// Takes in the state that is passed down to it using Provider as an argument.
// returns a JavaScript Object with two keys - users and numberOfUsers
// each of these keys have values that they get via the state
const mapStateToProps = (state) =>{
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}
// connect this component to Redux
//connects this component (Users) to the redux library allowing it to get pieces of the data from the state
// without this we would not be able to set the above JS object's values from the state
export default connect(mapStateToProps)(Users)
