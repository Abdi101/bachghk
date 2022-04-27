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
import ReactMarkdown from 'react-markdown';
import './Dashboard.css';

function Dashboard (props)  {
  const [val, setVal] = useState([]);
    const location = useLocation();
    console.log(location.pathname.substring(1));

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
        <ReactMarkdown>{val.Content}</ReactMarkdown>
      </div>
    );
  }

export default Dashboard;