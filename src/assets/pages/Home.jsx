import Perfil from '../images/1667876017269.jpg'

function Home() {







    


    return (
        <section>   
   
   <img src={Perfil} alt="Foto de Henrique Mateus" class="photo"/>

   <h1> Olá,eu sou o Henrique Mateus!</h1>

   <div >
            <div >
           
                <p>Técnico de Desenvolvimento de Sistemas</p>
            </div>
            <div>
            <p>Palhoça, Santa Catarina</p>
        </div>
            <div>
            <p>
                <a href="https://wa.me/48984213676?text=">
                    (048)98421-3676 (envie uma mensagem/ligue aqui)
                </a>
            </p>
        </div>
            <div>
            <p>
                <a href="mailto:henriquem.vdossantos@gmail.com">
                henriquem.vdossantos@gmail.com (envie uma e-mail aqui)
            </a>
            </p>
        </div>
        </div>
      </section>  
    )
}
export default Home; 