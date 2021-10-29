import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = props => 
    <header>
        <h1>RSVP</h1>
        <p>An Invitee Register</p>
        <GuestInputForm
            handleGuestSubmission={props.handleGuestSubmission}
            pendingGuest={props.pendingGuest}
            handleNameInput={props.handleNameInput}
        />
    </header>

Header.PropTypes = {
    handleGuestSubmission: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
}

export default Header;