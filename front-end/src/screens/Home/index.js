import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';



function Home() {

  const [userIsLogged, setUserLogin] = useState(false)



  return (
    <div id="Home">
      <h1>Bem vindo</h1>
      <p><b>Escolha uma opção:</b></p>


      <div className="buttons">
        <Link className="link" to={"List"}>
          Listar
        </Link>

        <Link className="link" to={"Auth"} >
          Loggin
        </Link>


      </div>





    </div>
  );
}

export default Home;
