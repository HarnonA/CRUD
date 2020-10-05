import React from 'react';
import './Register.css'
import axios from 'axios'




function Register({ user }) {

  function sendMedication(name, description, category, price) {
    console.log(user.name)
    let todayDate = `${(new Date().getDate()).toLocaleString(undefined, {minimumIntegerDigits: 2})}/${(new Date().getMonth() + 1).toLocaleString(undefined, {minimumIntegerDigits: 2})}/${new Date().getFullYear()}`
    let currentTime = `${new Date().getHours()}:${(new Date().getMinutes()).toLocaleString(undefined, {minimumIntegerDigits: 2})}`
    let medication = {
      name: name,
      description: description,
      category:category,
      price:price,
      creationTime: todayDate,
      creationDate: currentTime,
      creationUser: user.userName,

      updateTime: null,
      updateDate: null,
      updateUser: null
    }

    axios.post('http://localhost:3001/insert', {
      medication
    },{
      headers: {
          Authorization: `Bearer ${user.token}`
      }

  })
      .then(e => {
        console.log("Insert sucess")
        // console.log(e.data)
      })
      .catch(err => console.log(err))

  }



  return (
    <div className="register">
      <form className="registerForm">
        <input name="name" placeholder="Nome medicamento" autoComplete="off" />
        <input name="description" placeholder="Descrição" autoComplete="off" />
        <input name="category" placeholder="Categoria" autoComplete="off" />
        <input name="price" placeholder="Valor" autoComplete="off" />
      </form>
      <button className="sendButton" value="Enviar"
        onClick={() =>
          sendMedication(document.getElementsByName("name")[0].value,
            document.getElementsByName("description")[0].value,
            document.getElementsByName("category")[0].value,
            document.getElementsByName("price")[0].value)
        }
      >
        Enviar
      </button>


    </div >

  );
}

export default Register;
