import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {


  const {transactions} = useContext(GlobalContext) 
  const amounts = transactions.map(transaction => transaction.amount);
  
  const calculateTotal=(arr)=>{

    let total =0;
    for(let i=0; i<arr.length; i++){
      total += arr[i];
    }
    return total.toFixed(2);
  }

   const Amounttotal =calculateTotal(amounts)
  // const total = amounts.reduce((accumulator,currentValue)=>(accumulator += currentValue),0).toFixed(2)
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{Amounttotal} Rs</h1>
    </div>
  )
}

export default Balance
