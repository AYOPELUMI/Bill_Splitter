import { useState } from 'react'
import {removeComma} from "./assets/removeComma"
import { numberFormat } from './assets/numberFormat'
import './bill_splitter.css'

const tipsOption = [
	{value: 0.05, label: '5%'}, // -> <label> 5% <input type="radio" vaule="0.05"/> />
	{value: 0.1, label: '10%'},
	{value: 0.15, label: '15%'},
	{value: 0.25, label: '25%'},
	{value: 0.5, label: '50%'}	
]

export function BillSplitter(){
const [value, setValue] = useState('');
const [number, setNumber]= useState(1);
const [tips, setTips] = useState(false);
const[tipResult, setTipResult] = useState('');
const [totalResult, setTotalResult] = useState('');


console.log({value});
console.log({number})
console.log({tips})


	const getPriceChange = (event) => {
		const re = /^\d+$/;
		console.log(event.target.value)
		console.log(removeComma(event.target.value))
		if (event.target.value === "" || re.test(removeComma(event.target.value))) {

		setValue(removeComma(event.target.value))
	}
	}

	const getTipsChange = (event) =>{
		setTips(event.target.value)
	}

	const getPeopleChange = (event) =>{
		setNumber(removeComma(event.target.value))
	}

	const resetValue = () =>{
		setValue('');
		setTips(false);
		setNumber(1);
		setTipResult('')
		setTotalResult('')
	}

	const result= (e) => {
		e.preventDefault()
		const Value = Number(value)
		const Tips = Number(tips)
		const mumber = Number(number)
		console.log([Value,Tips,mumber])
	setTotalResult((((Value*Tips)+Value)/mumber).toFixed(2))
	setTipResult((((Value*Tips)/mumber)).toFixed(2))
}


	const renderTipsOption = () => {
		const tipsJsx = []
		for (let tip of tipsOption) {
			const tipJsx = (
				<label key={tip.value}>
 		 			<input type="radio" name= 'tip' value={tip.value} checked={tips== tip.value} onChange={getTipsChange}/>
		 			<span className='tips'>{tip.label}</span>
		 		</label>
			)
			tipsJsx.push(tipJsx)
		}
		return tipsJsx
	}
	return(
		<div className='main'>
			<div className="splitter">
		 		<h2>SPIL<br/>TTER</h2>
		 	</div>
		 	<div className="wrapper">
		 		<form className="BillSplitterForm SideBar1" onSubmit={result}>
		 			<div>
		 				<label>
		 				<h4>Bill:</h4>
		 				</label> 
		 				<input type="text" value={numberFormat(value)} maxLength='24' onChange={getPriceChange} className="input" required/>
		 			</div>
		 				<label className="TipsSelector" htmlFor ='tip' onChange={getTipsChange}> <h4>Select Tips %</h4>
		 					{renderTipsOption()}
		 			</label>
		 			<div>
		 				<label>
		 			 		<h4>Number of People</h4>
		 			 		<input type="text" value= {numberFormat(number)} className="inputNumber input" onChange= {getPeopleChange} inputMode ="numeric" required/>
		 				</label>
		 				
		 			</div>
		 			<button type="submit" className="SideBar1Btn btn">Submit</button>
		 		</form>
		 		<aside className="SideBar2">
		 			<div className="Bill">
		 				<div className="identity">
		 					<h4>Tip Amount</h4>
		 					<p>/ person</p>
		 				</div>
		 				<div className="bill">
		 				<h3>${numberFormat(tipResult)}</h3>
		 				</div>
		 			</div>
		 			<div className="Bill">
		 				<div className="identity">
		 					<h4>Total</h4>
		 					<p>/ person</p>
		 				</div>
		 				<div className="bill" >
		 				<h3>$ {numberFormat(totalResult)}</h3>
		 				</div>
		 			</div>
		 				<button  onClick={resetValue} className="Reset btn">RESET</button>
		 		</aside>
		 	</div>
		</div>
	
	)
}






/*

import Splitter, { version} from "./BillSplitter"

*/