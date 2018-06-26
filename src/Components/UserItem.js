import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    return (
      <li className="User">
        <span><span>{this.props.user.newid}.</span> <span>{this.props.user.email}</span></span> <button type="button" onClick={this.props.showEvent}>Show name</button>
      </li>
    );
  }
}

export default UserItem;
