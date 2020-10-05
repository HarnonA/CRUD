import React, { useState } from 'react';
import './Register.css'
import axios from 'axios'




function Update({ user }) {

    const [medication, setMedication] = useState({})

    function searchMedication(id) {
        axios.post('http://localhost:3001/search', {
            id
        })
            .then(e => {
                console.log(e.data)
                setMedication(e.data)
            })
            .catch(err => console.log(err))
    }

    function hasMedication() {
        if (Object.keys(medication).length !== 0)
            return (<div>
                <form className="registerForm">
                    <input name="name" defaultValue={medication.name} autoComplete="off" />
                    <input name="description" defaultValue={medication.description} autoComplete="off" />
                    <input name="category" defaultValue={medication.category} autoComplete="off" />
                    <input name="price" defaultValue={medication.price} autoComplete="off" />
                </form>
                <button className="sendButton" value="Enviar"
                    onClick={() =>
                        updateMedication(document.getElementsByName("name")[0].value,
                            document.getElementsByName("description")[0].value,
                            document.getElementsByName("category")[0].value,
                            document.getElementsByName("price")[0].value)
                    }
                >
                    Atualizar
                </button>
            </div>)

    }

    function updateMedication(name, description, category, price) {
        console.log(user.name)
        let todayDate = `${(new Date().getDate()).toLocaleString(undefined, { minimumIntegerDigits: 2 })}/${(new Date().getMonth() + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 })}/${new Date().getFullYear()}`
        let currentTime = `${new Date().getHours()}:${(new Date().getMinutes()).toLocaleString(undefined, { minimumIntegerDigits: 2 })}`
        let myMed = {
            ...medication
            // name: name,
            // description: description,
            // category: category,
            // price: price,
            // creationTime: todayDate,
            // creationDate: currentTime,
            // creationUser: user.userName,

            // updateTime: null,
            // updateDate: null,
            // updateUser: null
        }
        myMed.name = name
        myMed.description = description
        myMed.category = category
        myMed.price = price
        myMed.updateDate = todayDate
        myMed.updateTime = currentTime
        myMed.updateUser = "joao"
        // user.userName
        axios.post('http://localhost:3001/update', {
            myMed
        }, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }

        })
            .then(e => {
                console.log(e.data)
            })
            .catch(err => console.log(err))

    }



    return (
        <div className="register">
            <form className="registerForm">
                <input name="idMedication" placeholder="Id do medicamento" autoComplete="off" />
            </form>
            <button className="sendButton" value="Enviar"
                onClick={() =>
                    searchMedication(document.getElementsByName("idMedication")[0].value)
                }
            >
                Procurar
      </button>

            {hasMedication()}




        </div >

    );
}

export default Update;
