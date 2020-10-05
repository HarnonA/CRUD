import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

import './index.css';

import Register from './Register';
import Update from './Update';
import Delete from './Delete';



function Auth() {

    const [errorMsg, setErrorMsg] = useState("")
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState({})
    const [option, setOption] = useState("")

    function sendLogin(email, password) {
        console.log(email + " " + password)
        axios.post('http://localhost:3001/login', {
            email: email,
            password: password
        })
            .then(e => {
                console.log(e.data)
                if (e.data !== "Email ou senha incorreto.") {
                    setUser(e.data)
                    setLogin(true)
                } else {
                    setErrorMsg(e.data)
                }

            })
            .catch(err => console.log(err))
    }

    function logout() {
        setLogin(false)
        setUser({})
    }

    function renderOption() {
        if(option == "cadastrar"){
            return <Register user={user} />
        }
        else if(option == "alterar"){
            return <Update user={user}/>
        }
        else if(option == "excluir"){
            return <Delete user={user}/>
        }
    }



    return (
        <div id="Auth">
            {console.log(user)}
            {login ?
                <div className="buttons">

                    <button className="logoutBtn"
                         onClick={() => logout()}
                    >
                        Logout
                    </button>
                    <button className="link" onClick={()=>setOption("cadastrar")} >
                        Cadastrar
                    </button>
                    <button className="link"  onClick={()=>setOption("alterar")}>
                        Alterar
                    </button>
                    <button className="link" onClick={()=>setOption("excluir")} >
                        Excluir
                    </button>

                    {renderOption()}
                </div> :
                // "sim"
                <div>
                    <h1>Realize login</h1>
                    <form className="loginForm">
                        <input type="email" name="email" placeholder=" Email" autoComplete="off" />
                        <input type="password" name="password" placeholder=" Senha" autoComplete="off" />
                        {errorMsg}
                    </form>
                    <button className="sendButton" value="Enviar"
                        onClick={() =>
                            sendLogin(document.getElementsByName("email")[0].value,
                                document.getElementsByName("password")[0].value)
                        }
                    >
                        Enviar
                    </button>
                </div>
            }
        </div>

    );
}

export default Auth;
