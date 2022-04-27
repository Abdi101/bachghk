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
import "./Posts.css";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Post (props)  {
  const [val, setVal] = useState([]);
    const location = useLocation();
    const getAnswer = async () => {
      try {
        const response = await getSlugged('posts', location.pathname.substring(7)+"&populate=*");
        console.log(response.data.data[0].attributes);
        setVal(response.data.data[0].attributes);
      } catch (error) {
        this.setState({ error });
      }
    };

    useEffect(() => {
    getAnswer();
  }, []);

  function checkIfEmpty() {
    if (val.images != undefined) {
      if (val.images.data != null) {
        return true;
      } else { return false; }
    }
  }

    return (
      <div id="Post">
        <h1>{val.title}</h1>
        <ReactMarkdown>{val.postText}</ReactMarkdown>
        <div id="imgContainer">

        {checkIfEmpty() ? (val.images.data.map(content=>(
          <div key={content.id} className="postImagePreview"><Zoom><img className="zoom medium-zoom-image" src={"http://localhost:1337"+content.attributes.url}/></Zoom></div>
          ))) : ""}
        </div>
      </div>
    );
  }

export default Post;