import Perfil from '../images/1667876017269.jpg'
import LogoJavascript from '../images/javascript-logo-transparent-logo-javascript-images-3.png'
import LogoReact from '../images/png-transparent-react-native-hd-logo.png'
import '../pages/Home.css'

function Home() {


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

        <section class="acordeon open">
    
    <button class="trigger" type="button">
    Skills 
    <i class="fa-solid fa-chevron-down"></i>
</button>

<div class="content">
<div class="skills">

    <section class="tools">

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
    </div>
</section>
      </section>  
    )
}
export default Home; 