import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: '',
      teamSlug: ''
    }
    this.handleOrgChange = this.handleOrgChange.bind(this);
    this.handleTeamChange = this.handleTeamChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOrgChange(event) {
    this.setState({orgName: event.target.value});
  }

  handleTeamChange(event) {
    this.setState({teamSlug: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.orgName, this.state.teamSlug);
    event.preventDefault();
  }

  render() {
    return (
      <div id="add">
        <form onSubmit={this.handleSubmit}>
          <label>
            What is your organization's name?&nbsp;
            <input type="text" value={this.state.orgName} onChange={this.handleOrgChange} placeholder="cohort-project-groupX" />
          </label><br></br>
          <label>
            Enter a team slug to generate invitee ids:&nbsp;
            <input type="text" value={this.state.teamSlug} onChange={this.handleTeamChange} placeholder="a-staff-rpt"/>
          </label>
          <input id="submit" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default Add;