import {React, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation
} from "react-router-dom";
import { getSlugged } from '../API/testingAPI';
import './Dashboard.css';
import EditorJSParser from './EditorJSParser';
import Zoom from 'react-medium-image-zoom';
import NotFound from './NotFound';

//no more imports
var dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

function Dashboard (props)  {
  const [val, setVal] = useState([]);
  console.log(val);
  const postDate = dayjs(val.createdAt);
  const location = useLocation();
  const getAnswer = async () => {
      try {
        const response = await getSlugged('pages', location.pathname.substring(1)+"&populate=*");
        setVal(response.data.data[0].attributes);
      } catch (error) {
        this.setState({ error });
      }
    };


  function checkIfEmpty() {
    console.log(val);
    if (val.media != undefined) {
      if (val.media.data != null) {
        return true;
      } else { return false; }
    }
  }

    useEffect(() => {
    getAnswer();
  }, []);

    if(val.length != 0){
    return (
      <div id="Dashboard">
        <h1>{val.title}</h1>
        { (val.length > 0) ? (<span id="postDate"><b>Sist oppdatert: </b> {postDate.format( " MM/DD/YYYY kl: HH:mm")}</span>) : ""}
        
        <EditorJSParser data={val.content}/>
        <div id="imgContainer">
        {checkIfEmpty() ? (val.media.data.map(content=>(
          <div key={content.id} className="postImagePreview"><Zoom><img className="zoom medium-zoom-image" src={"http://localhost:1337"+content.attributes.url}/></Zoom></div>
          ))) : "" }
        </div>
      </div>
    );}

    else { return <NotFound/>;}
  }

export default Dashboard;