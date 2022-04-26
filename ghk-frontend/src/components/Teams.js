import React from 'react';
import Team from './Team';
import { getAll } from '../API/testingAPI';
import "./Teams.css";

class Teams extends React.Component {
    state = {
        content: [],
        error: null,
      };
      
    // Fetch all teams  immediately after the component is mounted
    componentDidMount = async () => {
      try {
        const response = await getAll('teams');
        this.setState({ content: response.data.data });
      } catch (error) {
        this.setState({ error });
      }
    };


  render() {
    const { error, content } = this.state;
    
    return (
      <div id="teams-container" className='teams'>
        <h1>Teams</h1>
        {!error ? content.map(team => <Team key={content.id} data={team}/>) : <p>{error}</p>}
      </div>
    );
  }
}


export default Teams;



