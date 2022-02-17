import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import './styles.css';
function TeacherItem() {

    return (

    <article className="teacher-item">
      <header>
      <img
        src="https://avatars.githubusercontent.com/u/94567136?v=4"
        alt="Cindy Rocha"
      />

      <div>
        <strong> Cindy Rocha</strong>
        <span>Programação</span>
      </div>  
      </header>
 
      <p>
      {" "}
      Apaixonada por aprender e ensinar.
      <br />
      <br></br>
      Não sou uma professora mas posso compartilhar tudo aquilo que
      aprendi nos projetos da Rocketseat com você. Busco sempre me
      aprimorar e amo aprender coisas novas.
      </p>

      <footer>    
          <p>
          Preço/hora
          <strong> Grátis </strong>
         </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>

  </article>);

}
export default TeacherItem;