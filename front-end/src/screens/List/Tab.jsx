import React from 'react';
import { useState } from 'react';
import './Tab.css';

/*
* This component iterates over an array of medications
* retrieved from a DB row, rendering its properties
*/


function Tab({ title, elementList }) {
  const [visible, setVisible] = useState(false)

  return (
    <div id="Tab">
      <button onClick={() => setVisible(!visible)} >{title}</button>

      {visible && elementList.map((e, i) =>
        <div className="element" key={i}>
          <p><b>{e.name}</b></p>
          <p>{e._id}</p>
          <p>{e.description}</p>
          <p>{e.categ}</p>
          <p>{e.price}</p>
          <p>{e.creationDate}</p>
          <p>{e.creationTime}</p>
          <p>{e.creationUser}</p>
          <p>{e.changeDate}</p>
          <p>{e.changeTime}</p>
          <p>{e.changeUser}</p>
        </div>
      )
      }

    </div>

  );
}

export default Tab;
