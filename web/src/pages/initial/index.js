import { IoIosArrowUp } from "react-icons/io"



import './style.css';
import logo from '../../assets/logo.svg'
import icon from '../../assets/icon2.png'
import shield from '../../assets/shield.png'
import passo1 from '../../assets/passo1.png'
import passo2 from '../../assets/passo2.png'
import passo3 from '../../assets/passo3.png'
import passo4 from '../../assets/passo4.png'
import contact from '../../assets/contact.png'
import whatsappIcon from '../../assets/whatsapp-icon.png'

import Input from '../../components/input/index'


const Initial = () =>  {
 
  
  
    function handleScroll() { 
      const target = document.querySelectorAll('[data-anime]')
      
      const animeClass = 'animate'
    
      const windowTop = window.pageYOffset+(window.innerHeight * 0.88)
      target.forEach(function(element) {
        if(windowTop > element.offsetTop){
          element.classList.add(animeClass)
        }else{
          element.classList.remove(animeClass);

        }
      })
    }



  window.addEventListener('scroll', function(){
    handleScroll();
  
  } )

  return ( 
    
    <>
      {/* // Header */}
      <div className="container">

          <div className="site-top justify-content" id="top-site">

          <div className="logo">
            <a  href="#">
              <img className="logo-img" src={logo} alt="logo"/>
              <h1>Vaini
                  <br/>
                  Associados
              </h1>
            </a>
          </div>

            <nav className="menu-content">
              <ul>
                <a href="#quem-somos-ancor"><li>Quem somos</li></a>
                <a href="#services-content"><li>Serviços</li></a>
                <a href="#passo-a-passo"><li>Como Funciona</li></a>
              </ul>
            </nav>

            <div className="contact">

              <a href="#contact-ancor" >Contato</a>
            </div>

          </div>
          <div className="top justify-content">

          <button ><a href="#top-site"><IoIosArrowUp /></a></button>
        </div>
      

            {/* Quem somos */}
          <div className="justify-content background" id="quem-somos-ancor">

          <div className="section-quem-somos" >
            <h2 >DIRIJA COM TRANQUILIDADE !</h2>
            <br/>
            <div className="text" >
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

          <div className="icon">
            <img src={icon} alt=""/>
          </div>
        </div>

          {/* Serviços */}
        <div className="background-services justify-content" id="services-content">
    
          <div className="services ">
            <ul data-anime="left">
              <li>RECURSOS DE MULTA</li>
              <li>SUSPENSÃO DO DIREITO <br/> DE DIRIGIR</li>
              <li>CASSAÇÃO</li>
            </ul>
            <div className="shield-service">
            <h3>Serviços</h3>
            <img src={shield} alt="Imagem escudo"/>
            </div>
            <ul data-anime="right">
              <li>LEI SECA EMBRIAGUEZ</li>
              <li>BLOQUEIOS GERAIS</li>
              <li>CONSULTORIA DEDICADA</li>
      
            </ul>
          </div>
        </div>
    
            {/* Como funciona */}
        <div className="como-funciona justify-content" id="passo-a-passo">
          <div className="passo" data-anime="left" >
            <img src={passo1} alt="Primeiro Passo"/>
            <p>Entre em contato através de E-mail e/ou Whatsapp descrevendo sua situação</p>
          </div>
      
          <div className="passo"  data-anime="right">
            <p>Responderemos o mais rápido possivel atráves do E-mail innformado ou pelo Whatsapp passando todas as informações necessárias para podermos fechar negócio</p>
            <img src={passo2} alt="Primeiro Passo"/>
          </div>
      
          <div className="passo" data-anime="left" >
            <img src={passo3} alt="Primeiro Passo"/>
            <p>Negócio fechado? Então neste passo iremos pedir alguns documentos, como CNH, COMPROVANTE DE ENDEREÇO, CPF entre outros. Podendo ser todos ser enviados via whatsapp ou e-mail.

            OBS: Será pedido a senha de acesso ao portal do dentran</p>
          </div>
      
          <div className="passo" data-anime="right" >
            <p>Após ser realizado todo processso, iremos manter você atualizado sobre todas as atualizações do seu caso, deixando você sempre por dentro do que está acontencendo. </p>
            <img src={passo4} alt="Primeiro Passo"/>
          </div>
      
          
        </div>


          {/* Contato */}
        <div className="container-contact" id="contact-ancor">

        <div className="contact-email justify-content" >
          <div className="input" data-anime="left">
            <Input label="Nome:" />
            <Input label="E-mail:" />
            <Input label="Assunto:" />
          </div>
          <h3>Contato</h3>
          <div className="img-contact" data-anime="right" > 
            <img src={contact} alt="Imagem e-mail" />
          </div>
        
        </div>
        <div className="txt-area" >
          <label>Mensagem: </label>
          <textarea name="Mensagem"  cols="90" rows="20"></textarea>
        </div>

        <div className="buttons">
          <button className="enviar" href="#">
            Enviar
          </button>
          <button className="whatsapp">
            <img src={whatsappIcon  } alt=""/>
            Whatsapp
          </button>
        </div>
      </div>
      </div>
    </>  
   
   
   
   );
  }


  export default Initial;