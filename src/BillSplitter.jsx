import { useState } from 'react'
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
const [count, setCount] = useState(1)
const [num, setNum] = useState('')
console.log({value});
console.log({number})
console.log({tips})
console.log({count})

	const getPriceChange = (event) => {
		const re = /^\d+$/;
	
		if (event.target.value === "" || re.test(event.target.value)) {
		setCount(count+1)

		setValue(event.target.value.toLocaleString())
	}
	}

	const getTipsChange = (event) =>{
		setTips(event.target.value)
		console.log({key})
	}

	const getPeopleChange = (event) =>{
		setNumber(event.target.value)
	}

	const resetValue = () =>{
		setValue('');
		setTips(false);
		setNumber(1);
		setTipResult('')
		setTotalResult('')
	}

	const result= () => {
		const Value = Number(value)
		const Tips = Number(tips)
		const mumber = Number(number)
		console.log([Value,Tips,mumber])
	setTotalResult((((Value*Tips)+Value)/mumber).toFixed(2))
	setTipResult((((Value*Tips)/mumber)).toFixed(2))
}
	console.log({result})

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
		 		<form className="BillSplitterForm SideBar1">
		 			<div>
		 				<label>
		 				Bill:
		 				</label> 
		 				<input type="text" value={value} maxlength='24' onChange={getPriceChange} className="input"/>
		 			</div>
		 			<div> 
		 				<label className="TipsSelector"> Select Tips %
		 					<label className="TipsSelect" htmlFor='tip' onChange={getTipsChange}>
		 					{renderTipsOption()}
		 				</label>
		 			</label>
		 			</div>
		 			<div>
		 				<label>
		 			 		Number of People
		 			 		<input type="Number" value= {number} className="inputNumber input" onInput= {getPeopleChange}/>
		 				</label>
		 				
		 			</div>
		 			<button type="button" className="SideBar1Btn btn" onClick={result}>Submit</button>
		 		</form>
		 		<aside className="SideBar2">
		 			<div className="Bill">
		 				<div className="identity">
		 					<h4>Tip Amount</h4>
		 					<p>/ person</p>
		 				</div>
		 				<div className="bill">
		 				<h3>${tipResult}</h3>
		 				</div>
		 			</div>
		 			<div className="Bill">
		 				<div className="identity">
		 					<h4>Total</h4>
		 					<p>/ person</p>
		 				</div>
		 				<div className="bill" >
		 				<h3>$ {totalResult}</h3>
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