import React from 'react';
import './postListItem.css';
import clockIcon from '../assets/icons8-clock.svg';
import PostPreview from './postPreview';

class PostListItem extends React.Component {
  checkIfImageExists(){
    if( this.props.data.attributes.thumbnail.data != null ){
      console.log("exists");
      return  "http://localhost:1337"+this.props.data.attributes.thumbnail.data.attributes.url;
    }
    
  }

  render() {
    const savedProps = this.props.data;
    //console.log(savedProps.attributes.thumbnail.data.attributes.url);
    return (
      <div id="aktueltPost">
      <div id="postText">
       <h3>{savedProps.attributes.title}</h3>
        <span id="postDate"><img src={clockIcon} alt="" id="clockIcon"/>{savedProps.attributes.date}</span>
        <PostPreview  data = {savedProps.attributes.postText}/>
        <a href="./">les mer</a>
      </div>
      <div id="postImage" style={{ backgroundImage: `url(${this.checkIfImageExists()})` }}></div>
      </div>
    );
  }
}

export default PostListItem;