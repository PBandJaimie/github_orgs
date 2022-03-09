import Invitee from './Invitee.jsx';

const Invitees = (props) => {
  const invitees = props.invitees;
  const inviteesList = invitees.map((listItem, index) => {
    <Invitee
      listItem={listItem}
      key={`list-item-#${index}`}
    />
  });

  return (
    <div id="invitees">
      {inviteesList}
    </div>
  );
}

export default Invitees;