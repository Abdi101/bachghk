import './Footer.css';   
import {React, useEffect, useState } from 'react';
import { getAll } from '../../API/testingAPI';

function Footer() {
    const [val, setVal] = useState([]);
    // Fetch your restaurants immediately after the component is mounted
    const getAnswer = async () => {
      try {
        const response = await getAll('footer-columns', '?populate=links');
        setVal(response.data.data);
      } catch (error) {
        this.setState({ error });
      }
    };

        

    useEffect(() => {
    getAnswer();
  }, []);

   return(
        <footer> 
            <div className="footerBox">
            {val.map(content => (
            <div className="column" key={content.id}>
            <h3>{content.attributes.columnTitle}</h3>
            {content.attributes.links.data.map(content => (
            <a key={content.id} href={content.attributes.linkURL}>{content.attributes.linkText}</a>
            ))}           
            </div>
            ))} 
        </div>
        <div className='copyright'>
                   <div id="copyrightWrapper">
                       <div className='copyrightTekst'> Copyright © 2022 </div>
                       <div className='copyrightGHK'>GHK 2022</div> 
                   </div>
                </div>
        </footer>
   )
}

export default Footer;