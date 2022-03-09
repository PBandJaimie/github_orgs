import React from 'react';
import ReactDOM from 'react-dom';
import Invitees from './components/Invitees.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteeIds: [1234, 1567, 1833]
    }
  }

  render() {
    return (
      <div id="app">
        <Invitees inviteeIds={this.state.inviteeIds} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;