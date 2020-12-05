
import './styles.css'
import '../../functions/scrollEvent/index'

import Passo1 from '../../assets/passo1.png'
import Passo2 from '../../assets/passo2.png'
import Passo3 from '../../assets/passo3.png'
import Passo4 from '../../assets/passo4.png'

export default function ComoFunciona(){
  return(
    <div className="container-como-funciona">
      <div className="passos-container">

        <h2 id="passo-a-passo">COMO FUNCIONA</h2>
        <div className="passo" data-anime="left">
          <img src={Passo1} alt="Passo 1" />
          <p>Entre em contato através de E-mail e/ou Whatsapp descrevendo sua situação</p>
        </div>
        <hr/>
        <div className="passo" data-anime="right">
        <p>Responderemos o mais rápido possivel atráves do E-mail innformado ou pelo Whatsapp passando todas as informações necessárias para podermos fechar negócio</p>
          <img src={Passo2} alt="Passo 2" />

        </div>
        <hr/>
        <div className="passo" data-anime="left">
          <img src={Passo3} alt="Passo 3" />
          <p>Negócio fechado? Então neste passo iremos pedir alguns documentos, como CNH, COMPROVANTE DE ENDEREÇO, CPF entre outros. Podendo ser todos ser enviados via whatsapp ou e-mail.
          <br/>
          OBS: Será pedido a senha de acesso ao portal do dentran</p>
        </div>
        <hr data-anime="left"/>
        <div className="passo" data-anime="right">
        <p>Após ser realizado todo processso, iremos manter você atualizado sobre todas as atualizações do seu caso, deixando você sempre por dentro do que está acontencendo. </p>
          <img src={Passo4} alt="Passo 4" />
          
        </div>
      </div>
    </div>
  );
}