import React, { Component } from 'react'
import ContactCard from './ContactCard';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar,IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";

export default class Header extends Component {
  render() {
    let { currentUser, reciever } = this.props;
    return (
      <div className={this.props.class} onClick={(e)=>{e.preventDefault()}}>
      <ContactCard data={this.props.class === 'left-header' ? {name: currentUser} : {name: reciever || ' '}} disableClick={true}/>
      <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
            <ChatIcon />
            </IconButton>
      </div>
    )
  }
}
