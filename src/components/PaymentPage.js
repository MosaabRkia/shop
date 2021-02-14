import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import EachLine from './EachLine'
import FormPayment from './FormPayment'
import NavBar from './NavBar'

function PaymentPage(props) {
    console.log(props.LastOrder)
    let [total,setTotal]= useState(0)
    return (
        <div>
              <NavBar Page="PaymentPage" /> 
              {
                  props.LastOrder.map(e=>{
                      total+= parseInt(e.price*e.quantity);
                    return  <EachLine type="PaymentPage" e={e}/>
                  })
              }
              <h1 style={{color:"white"}}>total Order : {total}$</h1>
              <FormPayment />
        </div>
    )
}
export default withRouter(PaymentPage)