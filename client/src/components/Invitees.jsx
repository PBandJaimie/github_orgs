import React from 'react';
import Invitee from './Invitee.jsx';

const Invitees = (props) => {
  const invitees = props.invitees;
  const inviteesList = invitees.map((listItem, index) => {

    return <Invitee
      id={listItem.id}
      name={listItem.name}
      key={`list-item-#${index}`}
    />
  });

  if (props.invitees.length === 0) {
    return null
  } else {
    return (
      <div id="invitees">
       <h3><u>On the <em>{props.orgName}</em> invite list from team <em>{props.teamSlug}</em>:</u></h3>
        {inviteesList}
        <button onClick={props.handleClick}>
          Send Invites
        </button>
      </div>
    );
  }
}

export default Invitees;