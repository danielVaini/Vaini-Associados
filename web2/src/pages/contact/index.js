import Input from '../../components/input/Input'
import './styles.css'

import IconContact from '../../assets/contact.png';

export default function Contact(){
  return(
    <div className="container-contact">
        <h3 id="contact">CONTATO</h3>
      <div className="container-input">

        <div className="contact-input">
          <Input label="E-mail:  "/>
          <Input label="Nome:  "/>
          <Input label="Assunto: "/>

        </div>
        <div className="img-contact">
          <img src={IconContact} alt="Imagem Contato" />
        </div>
      </div>
      <div className="text-area">
        <textarea />
      </div>
      <div className="buttons">

        <button className="btn-submit">Enviar</button>
        <button className="btn-whatsapp">WhatsApp</button>
      </div>
    </div>
  );
}