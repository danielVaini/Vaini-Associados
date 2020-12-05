
import './styles.css';
import imgIcon from '../../assets/img-icon.svg'

export default function QuemSomos(){
  
  
  window.onload = function(){ 
      const target = document.querySelectorAll('[data-anime]')
      
      const animeClass = 'animate'
  
      target.forEach(function(element) {
          element.classList.add(animeClass)
      })
    }
  


  return(
      <div className="container-quem-somos" >
        <div className="content" >
            <div className="background" data-anime="left">
            </div>
          <div className="title" > 
           <h1 data-anime="left" id="quem-somos">DIRIJA COM TRANQUILIDADE !
           </h1>
              <div className="text">

              <p data-anime="right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

            </div>
         <div className="img-icon"       data-anime="right">
           <img src={imgIcon} alt="Icone de um homem no volante" />
        </div>
        </div>
      </div>
  );
}