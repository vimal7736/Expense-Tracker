import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount

        }
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label
                        htmlFor="amount"
                        style={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            display: "block",
                            marginBottom: "10px",
                            lineHeight: "1.5",
                        }}
                    >
                        Amount <br />
                        <span style={{ fontWeight: "normal", fontSize: "12px", color: "#7f8c8d" }}>
                            (negative - expense, positive + income)
                        </span>
                    </label>

                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
