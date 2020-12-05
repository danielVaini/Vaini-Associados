
import './styles.css'

import Logo from '../../assets/logo.svg'
import {IoIosReorder, IoIosCloseCircleOutline} from 'react-icons/io'



export default function Menu(){
   
  
  function visible(){
      document.querySelector('.mobile').style.display = 'block'
      document.querySelector('.mobile').classList.add('animate')
      document.querySelector('.btn-open').style.display = 'none'
      document.querySelector('.btn-closed').style.display = 'flex'

      
    }
    
    function closed(){
      document.querySelector('.mobile').style.display = 'none'
      document.querySelector('.mobile').classList.remove('animate')
      document.querySelector('.btn-open').style.display = 'flex'
      document.querySelector('.btn-closed').style.display = 'none'
    }
  

  return (
    <div className="container">
      <div className="nav-menu">
        <nav className="menu-item">
          <img src={Logo} alt=""/>
          <ul>
            <li><a href="#quem-somos">Quem somos</a></li>
            <li><a href="#service">Serviços</a></li>
            <li><a href="#passo-a-passo">Como funciona</a></li>
            <li className="contact"><a href="#contact">Contato</a></li>

          </ul>
          <div className="container-mobile">

            <div className="menu-mobile">
              
                <img src={Logo} alt=""/>
              <div className="mobile animate" data-anime="right">
                <ul>
                  <li><a href="#quem-somos">Quem somos</a></li>
                  <li><a href="#service">Serviços</a></li>
                  <li><a href="#passo-a-passo">Como funciona</a></li>
                  <li className="contact"><a href="#contact">Contato</a></li>
                </ul>
              </div>

              <button className="btn-open" onClick={visible}>
                  <IoIosReorder size="3rem"/>
              </button>
              <button className="btn-closed" onClick={closed}>
                <IoIosCloseCircleOutline size="3rem"/>
              </button>
            </div>
        </div>
        </nav>
      </div>
    </div>
  );
}