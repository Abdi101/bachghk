import React from 'react';
import './MenuItem.css';
import arrowIcon from '../assets/arrow.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

class MenuItem extends React.Component {
    state = {
        isDropdown: false
      };

  render() {
    let newProps = this.props.data;
    let { isDropdown } = this.state;
    let item;
      {console.log(newProps)}
      if(newProps.children.length != 0){
        isDropdown = true;
      }
      if(!isDropdown){
        item = <div className="navButton"><a key={newProps.id} href={newProps.url} target={newProps.target}>{newProps.title}</a></div>;
      } else {
        item =(
          <div className="navButton dropdown">
            <a>{newProps.title}
              <span className="arrow"><img src={arrowIcon} alt="" id="arrowIcon"/></span>
            </a>
            <div className="dropMenu">
            {newProps.children.map(content => (<a key={content.id} target={content.target} href={content.url}>{content.title}</a>))}

            </div>
          </div>
        );
      }

    return (
      <>
      {item}
      </>
    );
  }
}

export default MenuItem;