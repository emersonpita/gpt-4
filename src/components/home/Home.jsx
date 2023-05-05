import './home.css';

const Home = () => {
  return (
    <div id="home">

      <div className="circulo1"></div>

      <div className="circulo2"></div>

      <div className="circulo3"></div>

      <div className="circulo4"></div>

      <div className="circulo5"></div>

      <div className="home-container">

        <div className="texts-home">

          <h1>Let's Build Something Amazing with GPT-4!</h1>

          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

          <form>

            <input type="email" placeholder="Your Email Address"/>

            <button type="submit">Get Started</button>

          </form>

          <div className="users-home">

            <img src="./img/Users.svg" alt="Imagem de Perfil dos Usuários."/>

            <p>+1.600 people requested access a visit in last 24 hours.</p>

          </div>

        </div>

        <div className="img-home">

          <img src="./img/Header.svg" alt="Ilustração da face de uma Inteligência Artificial." />

        </div>

      </div>

    </div>
  )
}

export default Home;