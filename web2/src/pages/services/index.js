import {  IoMdToday  } from 'react-icons/io';
import './styles.css';


import '../../functions/scrollEvent/index'

export default function Services(){

  
  return(
      <div className="container-service" >
        <div className="service-section">

          <div className="service-title" id="service">
            <h2 className="animate" data-anime="left"  >SERVIÇOS</h2>
          </div>
          <div className="service-names">
            <ul data-anime="left">
              <li><a href="#">RECURSOS DE MULTA</a></li>
              <li><a href="#">SUSPENSÃO DO DIREITO<br/> DE DIRIGIR</a></li>

              <li><a href="#">CASSAÇÃO</a></li>
            </ul>

            <IoMdToday size="8rem" className="icon-service" />

            <ul data-anime="right">
              <li><a href="#">LEI SECA EMBRIAGUEZ</a></li>
              <li><a href="#">BLOQUEIOS GERAIS</a></li>
              <li><a href="#">CONSULTORIA DEDICADA</a></li>
             
            </ul>
          </div>
        </div>
      </div>


  );
}