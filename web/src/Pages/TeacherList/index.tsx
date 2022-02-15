import React from 'react';

import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
         <PageHeader title= "Estes são os proffys disponíveis.">
         <form id="search-teachers">
           <div className="input-block">
               <label htmlFor="subject">Matéria</label>
               <input type="text" id="subject"/>     
           </div>

           
           <div className="input-block">
               <label htmlFor="week_day">Dia da semana</label>
               <input type="text" id="week_day"/>     
           </div>

         
           <div className="input-block">
               <label htmlFor="time">Hora</label>
               <input type="text" id="time"/>     
           </div>


         </form>
         </PageHeader>
         <main>
          <article className="teacher-item">
              <header>
                  <img src="https://avatars.githubusercontent.com/u/94567136?v=4" alt="Cindy Rocha" />
                  <div>
                      <strong> Cindy Rocha</strong>
                      <span>Programação</span>
                  </div>
              </header>

              <p> Apaixonada por aprender e ensinar.
                  <br /><br></br>
                  Não sou uma professora mas posso compartilhar tudo aquilo que aprendi nos projetos da Rocketseat com você. Busco sempre me aprimorar e amo aprender coisas novas.  
                  
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


          </article>

         </main>
        </div>
    )
}
export default TeacherList;