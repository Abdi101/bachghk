import React from 'react';
import './postListItem.css';
import clockIcon from '../assets/icons8-clock.svg';
import PostPreview from './postPreview';
var dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);


class PostListItem extends React.Component {
  checkIfImageExists(){
    if( this.props.data.attributes.thumbnail.data != null ){
      return  "http://localhost:1337"+this.props.data.attributes.thumbnail.data.attributes.url;
    }
    
  }

  render() {
    const savedProps = this.props.data;
    const postDate = dayjs(savedProps.attributes.createdAt);
    //console.log(savedProps.attributes.thumbnail.data.attributes.url);
    return (
      <div id="aktueltPost">
      <div id="postText">
       <a href={"/posts/"+savedProps.attributes.Slug} className="titleLink">{savedProps.attributes.title}</a>
        <span id="postDate"><img src={clockIcon} alt="" id="clockIcon"/>{postDate.format("MM / DD / YYYY")}</span>
        <span><PostPreview  data = {savedProps.attributes.postText}/>
        <a href={"/posts/"+savedProps.attributes.Slug}>les mer</a></span>
      </div>
      <div id="postImage" style={{ backgroundImage: `url(${this.checkIfImageExists()})` }}></div>
      </div>
    );
  }
}

export default PostListItem;