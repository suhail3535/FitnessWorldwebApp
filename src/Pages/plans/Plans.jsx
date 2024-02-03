import React from 'react'
import "./plans.css"
import { plans } from "../../data"

const Plans = () => {
  return (
    <div className='paln_container'>
      <h1 style={{marginBottom:"2rem",textAlign:"center"}}>Our Plans</h1>
      <div className='plan_card_div'>
        {plans.map((plan) => (
          <div key={plan.id}>

            <h2> {plan.name}</h2>
            <p>{plan.desc}</p>
            <p>Price: ${plan.price}</p>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Plans