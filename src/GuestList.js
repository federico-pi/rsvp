import React from "react";
import PropTypes from 'prop-types';
import Guest from "./Guest";

const GuestList = props => 
    <ul>
        { props.guests.map((guest, index) => 
            <Guest key={index} 
                name={guest.name}
                isConfirmed={guest.isConfirmed}
                isEditing={guest.isEditing}
                handleConfirmation={() => props.toggleConfirmation(index)}
                handleEditing={() => props.toggleEditing(index)}
                setName={text => props.setNameAt(text, index)}
            />
        )}
    </ul>

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired

}

export default GuestList;