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
      </section>  
    )
}
export default Home; 