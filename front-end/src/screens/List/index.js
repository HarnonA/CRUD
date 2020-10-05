import React, { useState } from 'react';
import Tab from './Tab';
import './index.css';
import axios from 'axios'

function List() {
	const [medications, setMedications] = useState([])

	const getData = () => {
		if (medications.length == 0) {
			// console.log("data")
			axios.get('http://localhost:3001/med')
				.then(res => {
					setMedications(res.data)
					// console.log(medications)
				}).catch(err => console.log(err))
		}
	}

	function createCategory(array) {
		let categories = array.map(e => (e.category))
		categories = ([...new Set(categories)])
		let filt = [];
		categories.map(e => {
			let aux = []
			array.map(c => {
				if (c.category == e)
					aux.push(c)
			})
			filt.push({ categ: e, element: aux })

		})
		// console.log(filt)
		return filt;
		// console.log(categories);
	}


	return (
		<div id="List">
			<h1>Listagem</h1>
			{/* <button onClick={() => getData()}>ok</button> */}
			{getData()}
			<div className="showList" >
				{createCategory(medications).map((categ, index) =>
					<Tab key={index} title={categ.categ} elementList={categ.element} />)
				}
				{/* {createCategory(medications).map(element => <p>{element}</p>
				)} */}
				{/* {medications.map((e, i) =>
					<div className="element">
						<p><b>{e.name}</b></p>
						<p>{e.description}</p>
						<p>{e.category}</p>
						<p>{e.price}</p>
						<p>{e.creationDate}</p>
						<p>{e.creationTime}</p>
						<p>{e.creationUser}</p>
						<p>{e.updateDate}</p>
						<p>{e.updateTime}</p>
						<p>{e.updateUser}</p>
					</div>

				)} */}
				{/* {elements.map((categ, index) =>
					<Tab key={index} title={categ.categ} elementList={categ.element} />)
				} */}
			</div>
		</div>

	);
}

export default List;
