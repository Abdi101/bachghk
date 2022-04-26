import "./card.css";
import React from 'react';
import CardList from "./cardList";
import { getAll } from '../API/testingAPI';

class Card extends React.Component {
    state = {
        content: [],
        error: null,
      };

      
    // Fetch your restaurants immediately after the component is mounted
    componentDidMount = async () => {
      try {
        const response = await getAll('cards', '?populate=links');
        this.setState({ content: response.data.data });
      } catch (error) {
        this.setState({ error });
      }
    };


  render() {
    const { error, content } = this.state;
    
    return (
    <div id="cardContainer">
    {this.state.content.map(content => (
    <CardList key={content.id} data={content.attributes} />
    ))}
    </div>
    );
  }
}



const FFFFF = () => {
  return (
    <div id="cardContainer">
      <CardList cards={true}/>
      <CardList cards={true}/>
    </div>
  );
};

export default Card;
