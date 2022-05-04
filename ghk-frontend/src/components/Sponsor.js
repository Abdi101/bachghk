import './Sponsor.css';
//main sponsors
import Sparebank1 from '../assets/img/sponsor/Sparebank1-Østlandet.svg';
import XXL from '../assets/img/sponsor/XXL.png';
import CC from '../assets/img/sponsor/CC.svg';
import Select from '../assets/img/sponsor/Select.svg';
//secondary sponsors
import Byggmakker from '../assets/img/sponsor/Byggmakker.svg';
import Mustad from '../assets/img/sponsor/Mustad-næringspark.svg';
import TotenTrening from '../assets/img/sponsor/Toten Treningssenter.jpg';
//other sponsors
import Jobzone from '../assets/img/sponsor/jobzone.svg';
import Kontur from '../assets/img/sponsor/Kontur.svg';
import Profil from '../assets/img/sponsor/Profil Grafisk.svg';
import Konsult from '../assets/img/sponsor/Regnskapskonsult.svg';
import Svanelauget from '../assets/img/sponsor/svanelauget2-300x99.jpg';

const Sponsor = () => {
  return (
    <div id="Sponsor">
    <h2>Våre Sponsorer:</h2>
    <div id="primary" className="Sponsors">
      <a href="https://www.sparebank1.no/ostlandet/" target="_blank"><img src={Sparebank1} alt="Gjøvik handball klubb logo"/></a>
      <a href="https://www.xxl.no/" target="_blank"><img src={XXL} alt="XXL logo"/></a>
      <a href="http://ccgjovik.no/" target="_blank"><img src={CC} alt="CC Gjøvik logo"/></a>
      <a href="http://www.select-sport.com/no" target="_blank"><img src={Select} alt="Select sport logo"/></a>
    </div>
    <div id="secondary" className="Sponsors">
      <a href="https://www.byggmakker.no/butikker/byggmakker-skattum-gjovik" target="_blank"><img src={Byggmakker} alt="Byggmakker klubb logo"/></a>
      <a href="http://mustadnaeringspark.no/" target="_blank"><img src={Mustad} alt="Mustad næringspark logo"/></a>
      <a href="http://totentreningssenter.no/" target="_blank"><img src={TotenTrening} alt="Toten Treningssenter logo"/></a>
    </div>
    <div id="tertiary" className="Sponsors">
      <a href="http://jobzone.no/" target="_blank"><img src={Jobzone} alt="jobzone logo"/></a>
      <a href="http://www.kontur.as/" target="_blank"><img src={Kontur} alt="Kontur logo"/></a>
      <a href="http://profilgrafisk.no/" target="_blank"><img src={Profil} alt="Profil logo"/></a>
      <a href="http://www.rcas.no/" target="_blank"><img src={Konsult} alt="Konsult logo"/></a>
      <a target="_blank"><img src={Svanelauget} alt="Svanelauget logo"/></a>      
    </div>
    </div>
  );
};

export default Sponsor;
