import React from 'react';
import PostList from './postList';
import Pagination from './pagination';
import PaginationNew from './paginationNew';
import './postContainer.css';
import { getAll } from '../API/testingAPI';

class PostContainer extends React.Component {
    state = {
        content: [],
        error: null,
        currentPage: 1,
        pageSize: 2,
        totalPages: 0,
        pageOffset: 0
      };

      
    // Fetch your restaurants immediately after the component is mounted
    componentDidMount = async () => {
      try {
        console.log("current page:" + this.state.currentPage);
        const response = await getAll('posts', `?populate=*&sort=publishedAt:desc&pagination[start]=${this.state.currentPage}&pagination[limit]=${this.state.pageSize}`);
        this.setState({ content: response.data.data, totalPages: response.data.meta.pagination.total });
      } catch (error) {
        this.setState({ error });
      }
    }

    async reRenderAndSetPage (page) {
      this.setState({ currentPage: page });
      console.log("current page after:" + this.state.currentPage);
      try {
        const response = await getAll('posts', `?populate=*&sort=publishedAt:desc&pagination[start]=${this.state.currentPage}&pagination[limit]=${this.state.pageSize}`);
        this.setState({ content: response.data.data, totalPages: response.data.meta.pagination.total });
      } catch (error) {
        this.setState({ error });
      }
      this.setState({ currentPage: page });
    }

  render() {
    const { error, content } = this.state;
    
    return (
      <div id="postContainer">
      <h1>Aktuelt: </h1>
      <PostList info = {this.state.content}/>
      <PaginationNew
        className="pagination-bar"
        currentPage={this.state.currentPage}
        totalCount={this.state.totalPages}
        pageSize={this.state.pageSize}
        onPageChange={page => this.reRenderAndSetPage(page)}
      />
      {console.log(this.state.currentPage)}
      </div>
    );
  }
}

export default PostContainer;