import React, { Component } from 'react';
import UserItem from './UserItem';
import fetchdata from '../services/fetchUsers';
import appendId from '../utils/appendId';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  
  componentWillMount() {
    // get data on mount
    this.getData();
  }

  //alert name
  showUserName = (item, e) => {
    alert(item.name)
  }

  //wrapper to get data
  getData = () => {
    // Set timeout to reduce server call.. can do this with debounce etc
    setTimeout(function() { 
      //Fetch data and assign to state
      fetchdata()
      .then(data => this.setState({ users: Object.assign([], this.state.users, appendId(data))})
      )
    }.bind(this), 1000);
  }
  
  render() {
    let userItems;
    //listen for end of scroll from parent
    if (this.props.loadmore) {
      this.getData();
    }
    // check is state has user data
    if (this.state.users) {
      //map userdata to items and assign to variable
      userItems = this.state.users.map(user => {
        return <UserItem key={user.newid} user={user} showEvent={this.showUserName.bind(this, user)} />
      });
    }
    return (
      <div className="users">
        {userItems}
      </div>
    );
  }
}
export default Users;
