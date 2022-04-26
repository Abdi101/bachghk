import React from 'react';
import './MenuItem.css';
import arrowIcon from '../assets/arrow.svg';

class MenuItem extends React.Component {
    state = {
        isDropdown: false
      };


  render() {
    let newProps = this.props.data;
    let { isDropdown } = this.state;
    let item;
      if(newProps.attributes.links.data.length > 0){
        isDropdown = true;
      }
      if(!isDropdown){
        item = <div className="navButton"><a href={newProps.attributes.URL}>{newProps.attributes.link}</a></div>;
      } else {
        item =(
          <div className="navButton dropdown">
            <a>{newProps.attributes.link}
              <span className="arrow"><img src={arrowIcon} alt="" id="arrowIcon"/></span>
            </a>
            <div className="dropMenu">
              {newProps.attributes.links.data.map(content => (
                <a key={content.id} href={content.attributes.LinkURL}>{content.attributes.linkText}</a>
              ))}
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