import React from 'react';

const Invitee = (props) => {
  return (
    <div id="invitee">
      <strong>{props.name}</strong> <small>(id#{props.id})</small><br></br>
    </div>
  )
}

export default Invitee;