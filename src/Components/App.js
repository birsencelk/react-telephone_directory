import React, { Component } from 'react';
import '../App.css';
import Contacts from './Contacts';

class App extends Component {
    constructor(props){
        super(props);
        this.addContact = this.addContact.bind(this);
    }
    state = {
        contacts: [{
            name: 'Mehmet',
            phone: '123123123'
        },{
            name: 'Birsen',
            phone: '45781354'
        }]
    };

    addContact(contact){
        const{ contacts } = this.state;
        contacts.push(contact);
        this.setState({
            contacts
        });
    }
  render() {
    return (
      <div className="App">
        <Contacts
            addContact={this.addContact}
            contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
