import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Tresaure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nick',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Matt',
        isConfirmed: false,
        isEditing: false
      }
    ]
  }

  toggleGuestProperty = (property, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    })
  
  toggleConfirmation = index =>
    this.toggleGuestProperty("isConfirmed", index)
  
  removeGuest = index => 
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index +1)
      ]
    })
  
  toggleEditing = index => 
    this.toggleGuestProperty("isEditing", index)
  
  setNameAt = (name, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          }
        }
        return guest;
      })
    })
  
  toggleFilter = () => 
    this.setState({ isFiltered: !this.state.isFiltered });
  
  handleNameInput = e => 
    this.setState({ pendingGuest: e.target.value })
  
  handleGuestSubmission = e => {
    e.preventDefault()
    if (this.state.pendingGuest.length > 0) {
      this.setState({
        guests: [
          {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
          },
        ...this.state.guests
        ],
        pendingGuest: ""
      })
    }
  }

  getTotalInvited = () => this.state.guests.length;

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>An Invitee Register</p>
          <form onSubmit={this.handleGuestSubmission}>
            <input 
              type="text" 
              onChange={this.handleNameInput}
              value={this.state.pendingGuest}
              placeholder="Invite Someone" 
            />
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox" 
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          
          <GuestList 
            guests={this.state.guests}
            toggleConfirmation={this.toggleConfirmation}
            toggleEditing={this.toggleEditing}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuest={this.removeGuest}
          />
          
        </div>
      </div>
    );
  }
}

export default App;
