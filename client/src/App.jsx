import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Invitees from './components/Invitees.jsx';
import Add from './components/Add.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteeInfo: [],
      orgName: '',
      sent: '',
      teamSlug: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleSubmit(orgName, teamSlug) {
    $.ajax({
      type: 'GET',
      url: '/inviteeInfo',
      data: {
        orgName: orgName,
        teamSlug: teamSlug
      },
      dataType: 'json',
      success: (response) => {
        let newInviteeInfo = this.state.inviteeInfo.concat(response);
        this.setState({
          inviteeInfo: newInviteeInfo,
          orgName: orgName,
          teamSlug: teamSlug
        })
      },
      error: (error) => {
        console.log('Error in client request for /inviteeInfo!: ', error);
      }
    });
  }

  handleClick() {
    $.ajax({
      type: 'POST',
      url: '/sendInvites',
      data: {
        orgName: this.state.orgName,
        inviteeInfo: this.state.inviteeInfo,
        teamSlug: this.state.teamSlug
      },
      dataType: 'json',
      success: (response) => {
        this.setState({
          sent: 'Organization invitations sent!'
        })
      },
      error: (error) => {
        console.log('Error in client request for /sendInvites!: ', error);
      }
    });
  }

  render() {
    return (
      <div id="app">
        <h1>The Inviternator</h1>
        <h3>(... or some other name)</h3>
        <br></br>
        <Add
          onSubmit={this.handleSubmit}
        />
        <br></br>
        <Invitees
          invitees={this.state.inviteeInfo}
          orgName={this.state.orgName}
          teamSlug={this.state.teamSlug}
          handleClick={this.handleClick}
         />
        <h4>{this.state.sent}</h4>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;