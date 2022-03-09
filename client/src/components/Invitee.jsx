const Invitee = (props) => {
  console.log('invitee props: ', props)
  return (
    <div id="invitee">
      {props.listItem}
    </div>
  )
}

export default Invitee;