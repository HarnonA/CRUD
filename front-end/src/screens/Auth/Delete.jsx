import React, { useState } from 'react';
import './Register.css'
import axios from 'axios'


function Delete({ user }) {

    const [msg, setMsg] = useState("")

    function deleteMedication(id) {
        axios.post('http://localhost:3001/delete', {
            id
        }
            , {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }

            })
            .then(e => {
                setMsg("Deletado com sucesso")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="register">
            {msg}
            <form className="registerForm">
                <input name="idMedication" placeholder="Id do medicamento" autoComplete="off" />
            </form>
            <button className="sendButton" value="Enviar"
                onClick={() =>
                    deleteMedication(document.getElementsByName("idMedication")[0].value)
                }
            >
                Deletar
        </button>
        </div >

    );
}

export default Delete;
