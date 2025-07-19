import { useState } from 'react'


const EnterCreditCard = () => {
    const [number, setNumber] = useState('')
    const [cvv, setCvv] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [holderName, setHolderName] = useState('')
    const [error, setError] = useState(null)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const creditcard={number,cvv,expiryDate,holderName}

        const response = await fetch('/api/IndividualTrainee/creditcard', {
            method: 'POST',
            body: JSON.stringify(creditcard),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const json = await response.json()
          if (!response.ok) {
            setError(json.error)
          }
          if (response.ok) {
            setError(null)
            setNumber('')
            setCvv('')
           // setCommentId('')
           setExpiryDate('')
           setHolderName('')

            console.log('New Credit Card added:', json)
          }
        }
 
        return (

            <form className="create" onSubmit={handleSubmit}> 
              <h3>Enter CreditCard Details</h3>
                   
        
              <label>Card Number:</label>
              <input 
                type="number" 
                onChange={(e) => setNumber(e.target.value)} 
                value={number}
              />
        
              <label>Cvv:</label>
              <input 
                type="number" 
                onChange={(e) => setCvv(e.target.value)} 
                value={cvv} 
              />

            <label>Expiry Date:</label>
              <input 
                type="date" 
                onChange={(e) => setExpiryDate(e.target.value)} 
                value={expiryDate} 
              />

            <label>HolderName:</label>
              <input 
                type="String" 
                onChange={(e) => setHolderName(e.target.value)} 
                value={holderName} 
              />
        
              <button>Enter CreditCard Details</button>
              {error && <div className="error">{error}</div>}
            </form>
          )
        }
        
        export default EnterCreditCard