import Perfil from '../images/1667876017269.jpg'
import LogoJavascript from '../images/javascript-logo-transparent-logo-javascript-images-3.png'
import LogoReact from '../images/png-transparent-react-native-hd-logo.png'
import '../pages/Home.css'

function Home() {

    const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
       const acordeon = trigger.parentElement
        const isOpen = acordeon.classList.contains('open')

        if (isOpen){
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})


    return (
        <section className="container">   
    <header className="header">

   <img src={Perfil}  className="photo"/>

   <h1 className="title"> Olá,eu sou o Henrique Mateus!</h1>

   <div className="information">
            <div className="align">
                <i className="fa-solid fa-user"></i>
               <span> Técnico de Desenvolvimento de Sistemas </span>
            </div>

            <div className="align">
            <i className="fa-solid fa-location-dot"></i>
            <span> Palhoça, Santa Catarina </span>
        </div>

            <div className="align">
            <i className="fa-solid fa-phone"></i>
                <a href="https://wa.me/48984213676?text=">
                <span>   (048)98421-3676 (envie uma mensagem/ligue aqui)  </span>
                </a>
        </div>

            <div className="align">
            <i className="fa-solid fa-envelope"></i>   
                <a href="mailto:henriquem.vdossantos@gmail.com">
                <span>  henriquem.vdossantos@gmail.com (envie uma e-mail aqui) </span>
            </a>
                
        </div>
        </div>
        </header>

        <section className="acordeon open">
    
    <button className="trigger" type="button">
    Skills 
    <i className="fa-solid fa-chevron-down"></i>
</button>

<div className="content">
<div className="skills">

    <section className="tools">

        <h3>Habilidades Profissionais: </h3>
        <ul>
            <li>
                <img src={LogoJavascript} alt="javascript" title="javascript"/>
            </li>
            <li>
                <img src={LogoReact} alt="react" title="react"/>
            </li>
        </ul>
    </section>
    </div>
    <section className="personal">
    <h3>Habilidades Pessoais: </h3>
    <ul>
        <li>
            Responsável;
        </li>
        <li>
            Educado;
        </li>
        <li>
            Esforçado;
        </li>
        <li>
            Comprometido;
        </li>
        <li>
            Empático;
        </li>
        <li>
            Observador;
        </li>
    </ul>
</section>
    </div>
    
</section>


<section className="acordeon open">
    
        <button className="trigger" type="button">
    Idiomas 
    <i className="fa-solid fa-chevron-down"></i>
</button>

<div className="content">
<ul className="languages">
    <li>
    <i className="fa-solid fa-check"></i>
        Português (BR)
    </li>

    <li>
    <i className="fa-solid fa-check"></i>
    Inglês (básico)
    </li>
</ul>
</div>

</section>

<section className="acordeon open">

    <button className="trigger" type="button">
        Portfólio 
        <i className="fa-solid fa-chevron-down"></i>
    </button>

<div className="content">
   <ul className="portfolio">
       <li>
    <h3 className="title"> 
    <i className="fa-brands fa-github"></i>
        Meu currículo em formato app.
    </h3>
        <a href="https://github.com/DevHenriquecido/Meu_Curriculo_app.git">Meu_Curriculo_app.git</a>
    </li>
    <li>
    <h3 className="title">  
    <i className="fa-brands fa-github"></i>
    Lista de pokemons sincronizada com API com responsividade mobile.
    </h3>
        <a href="https://github.com/DevHenriquecido/pokedex.git">pokedex.git</a>
    </li>


   </ul>
</div>
</section>

<section className="acordeon open">
    
<button className="trigger" type="button">
    Experiência profissional 
<i className="fa-solid fa-chevron-down"></i>
</button>

<div className="content">
<ul className="experiences">
        <h3 className="title">Jovem Aprendiz (Auxiliar Administrativo de Departamento de Pessoal) - Lojas Koerich </h3>
        <span className="time"> <i className="fa-solid fa-calendar-days"></i> 
           03/2018 - 07/2019
        </span>
        <p>
            <li>
                Arquivamento;  
            </li>
            <li>
                Envio e descarte de cartões e uniformes; 
            </li> 
            <li>
                Lançamento de Notas;
            </li>
            <li>
                Entrega, recibos e separação de documentos. 
            </li>
            
        </p>
    
   
        <h3 className="title">Jovem Aprendiz (Auxiliar Administrativo de Recursos Humanos) - Albertoni Transportes</h3>
        <span className="time"> <i className="fa-solid fa-calendar-days"></i> 
           03/2018 - 07/2019
        </span>
        <p>
            <li>    
                Arquivamento;
            </li>
            <li>
                Conferência de Notas;
            </li>
            <li>
                Escaneamento de documentos; 
            </li>
            <li>
                Entrega, recibos e separação de documentos.
            </li>
        </p>
   
    
        <h3 className="title">Auxiliar de produção (linha inversores) - Ageon Electronic Controls</h3>
        <span className="time"> <i className="fa-solid fa-calendar-days"></i> 
           10/2021 - Atual
        </span>
        <p>
            <li>
                Montagem de placas;
        </li>
            <li>
                Testes de funcionamentos básicos;
            </li>
            <li>
                Etiquetação.
            </li>
            
        </p>
 

</ul>
</div>


</section>
      </section>  
    )
}
export default Home; 