import './Footer.css';   
import React from 'react';

function Footer() {
   return(
        <footer> 
            <div className="footerBox">
                <div className="column" id='columnleft'>
                    <h3>Lenker</h3>
                    <a href="https://www.norsk-tipping.no/grasrotandelen" target="_blank">Grasrotandelen</a> 
                    <a href="https://minidrett.nif.no/" target="_blank">Min Idrett</a> 
                    <a href="https://www.handball.no/regioner/nhf-sentralt/praktisk-info/praktiske-verktoy/min-handball/" target="_blank">Min Håndball</a> 
                    <a href="https://www.handball.no/" target="_blank">Norges Håndballforbund</a> 
                </div>
                <div className="column" id='columnMiddle'>
                    <h3>Dokumenter</h3>
                    <a href='' target='_blank'>Forklaring og søknad for politiattest (PDF) </a>
                    <a href='' target='_blank'> Mål og strategiplan (PDF) </a>
                    <a href='' target='_blank'>Klubbhåndbok (PDF) </a>
                    <a href='' target='_blank'>Sportsplan (PDF) </a>
                </div>
                <div className="column" id='columnRight'>
                    <h3>Kontakt</h3>
                    Campus Arena Gjøvik, Merkantilvegen 3, 2815 Gjøvik <br></br>
                   <a href='https://www.facebook.com/gjovikhk'>GHK Facebook </a>
                    <a href=''>48005477</a>
                    <a href=''>post@gjovikhk.no </a>
                    <a href='https://www.instagram.com/gjovikhk/'>GHK Instagram</a>
                </div>
                <div className="column" id='stream'>
                    <h3>Se Bortekampene live:</h3>
                    <a href="https://handballtv.com/" target="_blank">Se bortekamper live</a>
                </div>
                
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