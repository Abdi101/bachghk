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
        const response = await getSlugged('pages', location.pathname.substring(1));
        setVal(response.data.data[0].attributes);
      } catch (error) {
        this.setState({ error });
      }
    };

    useEffect(() => {
    getAnswer();
  }, []);
    return (
      <div id="Dashboard">
        <h1>{val.TItle}</h1>
        { (val.length > 0) ? (<span id="postDate"><b>Sist oppdatert: </b> {postDate.format( " MM/DD/YYYY kl: HH:mm")}</span>) : ""}
        
        <EditorJSParser data={val.Content}/>
      </div>
    );
  }

export default Dashboard;