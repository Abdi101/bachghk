import React from 'react';
import PostListItem from '../components/postListItem';
import './postList.css';

class PostList extends React.Component {
  render() {

    return (

      <div id="postList">
          {this.props.info.map(content => (
            <PostListItem key={content.id} data={content}/>
          ))}
        </div>
    );
  }
}

export default PostList;