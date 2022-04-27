import './NewNav.css';
import logo from "../assets/img/logo.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrowIcon from '../assets/arrow.svg';
import logoWide from '../assets/ghkLogoWide.svg';
import menuCross from '../assets/menu-cross.svg';
import menuBars from '../assets/menu-bars.svg';
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import React from 'react';
import { getAll } from '../API/testingAPI';

class NewNav extends React.Component {
    state = {
        content: [],
        error: null,
        isMobile: true
      };

    // Fetch your restaurants immediately after the component is mounted
    componentDidMount = async () => {
      try {
        const response = await getAll('header-links', '?populate=*');
        this.setState({ content: response.data.data });
      } catch (error) {
        this.setState({ error });
      }
    };

  render() {
    return (
    <div id="navMenu">
      <div id="navHead">
        <div id="headWrapper"> 
          <Link className="anchor" to="/"><img src={logoWide} alt="Gjøvik handball klubb logo" id="logo"/></Link>
          <div className="follow">
              <a href="https://web.facebook.com/gjovikhk" target="_blank"><span>Følg oss på </span>
              <FontAwesomeIcon className="fa-icon" icon={["fab", "facebook-f"]} />
            </a>
          </div>
        </div>
      </div>
      <div id="navMain">
        <button className="mobile-icon" onClick={() => (this.setState({isMobile: !this.state.isMobile}))}>
        {this.state.isMobile ? (<img src={menuBars} />) : (<img src={menuCross} />)}
        </button>
      <div id="navButtons" className={this.state.isMobile ? ("visible") : ("")} >
          {this.state.content.map(content => (
            <MenuItem key={content.id} data={content}/>
          ))}
      </div>
      </div>
    </div>
    );
  }
}

export default NewNav;