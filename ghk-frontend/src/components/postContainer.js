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
        pageSize: 5,
        totalPages: 0,
        pageOffset: 0
      };

      
    // Fetch your restaurants immediately after the component is mounted
    componentDidMount = async () => {
      try {
        const response = await getAll('posts', `?populate=*&sort=publishedAt:desc&pagination[start]=${this.state.pageOffset}&pagination[limit]=${this.state.pageSize}`);
        this.setState({ content: response.data.data, totalPages: response.data.meta.pagination.total });
      } catch (error) {
        this.setState({ error });
      }
    }

    async reRenderAndSetPage (page) {
      this.state.currentPage = page;
      this.state.currentPage > 1 ? ( this.state.pageOffset = ( page - 1 ) * this.state.pageSize ) : this.state.pageOffset = 0;
      try {
        const response = await getAll('posts', `?populate=*&sort=publishedAt:desc&pagination[start]=${this.state.pageOffset}&pagination[limit]=${this.state.pageSize}`);
        this.setState({ content: response.data.data, totalPages: response.data.meta.pagination.total });
      } catch (error) {
        this.setState({ error });
      }
    }

    pageOffsetUpdate(){
      if(this.state.currentPage == 1){ 
        this.state.pageOffset = 0;
      }

      else{ 
        this.state.pageOffset = ((this.state.currentPage - 1) * this.state.pageSize);
      }

    }

    onChangedPage(page){
      this.pageOffsetUpdate();
      this.reRenderAndSetPage(page);
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
        onPageChange={page => this.onChangedPage(page)}
      />
      </div>
    );
  }
}

export default PostContainer;