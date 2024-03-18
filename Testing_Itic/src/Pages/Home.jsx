import Header from "./Header";
import "../estilos/Home.css"
import logoItic from "../imagenes/logo horitzontal Institut TIC de Barcelona (Color).png"
import bocchi from "../imagenes/bocchi.jpg"

    function DeaultButton({ h2 }) {
        return (
        <button>{h2}</button>
        );
    }

    function ButtonStyle2({h3}){
        return (
            <button>{h3}</button>
        )
    }

  function FormacionesItic ({ nombre, siglas }) {
    return (
      <div>
        <p>{nombre}</p>
        <p>({siglas})</p>
      </div>
    );
  }
  
  function Noticias({fecha, hora , descripcion}){
    return(
        <div className="informacionNoticias">
            <p>{fecha}</p>
            <p>{hora}</p>
            <p>{descripcion}</p>
        </div>
    )
  }


const HomePage = () =>{
    return (    



        <div>
            <Header/>           
            <div id="container-body">              
                <section id="section-container">
                    <div id="bloque1">
                        <div id="imagen-main">
                            <img src={logoItic} alt="logotipo itic"  />    
                        </div>
                        <div id="bloque2">
                            <div id="descripcion">
                                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit corporis nesciunt laudantium nemo natus consequuntur perferendis quas repellendus ad.</h3>
                            </div>
                            <div id="botones">
                                <DeaultButton h2="Puertas Abiertas 2.0" />
                                <DeaultButton h2="Matriculación 2.0" />
                            </div>
                        </div>
                    </div>  
                </section>

                <div className="titutlo">
                    <h1>Estudios</h1>
                </div>
                <div id="formaciones">
                    <div>
                        <FormacionesItic nombre="Programas de Formación e Inserción" siglas="PFI" />
                    </div>
  
                    <div>
                    <FormacionesItic nombre="Ciclo Formativo Grado Medio" siglas="CFGM" />
                    </div>

                    <div>
                    <FormacionesItic nombre="Ciclo Formativo Grado Superior" siglas="CFGS" />
                    </div>

                    <div>
                    <FormacionesItic nombre="Curso de Especialización" siglas="CE" />
                    </div>

                </div>

                <div className="titutlo">
                    <h1>Actualidad</h1>
                </div>

                <div id="bloqueActualidad">
                    <div id="carrusel">
                        <div className="actualidad" >
                        <img src={bocchi} alt="" />
                        <Noticias fecha ="Dia/Mes/Año" hora="Hora 123" descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ea quo voluptate nemo ad commodi."   />
                        <ButtonStyle2 h3="ver más"/>
                        </div>
                        
                        <div className="actualidad" >
                        <img src={bocchi} alt="" />
                        <Noticias fecha ="Dia/Mes/Año" hora="Hora 123" descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ea quo voluptate nemo ad commodi."   />
                        <ButtonStyle2 h3="ver más"/>
                        </div>

                        <div className="actualidad" >
                        <img src={bocchi} alt="" />
                        <Noticias fecha ="Dia/Mes/Año" hora="Hora 123" descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ea quo voluptate nemo ad commodi."   />
                        <ButtonStyle2 h3="ver más"/>
                        </div>  
                    </div>    
                </div>

            </div>
        </div>
    )
}

export default HomePage;