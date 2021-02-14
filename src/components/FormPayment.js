import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../cssFile/FormPayment.css'

function FormPayment(props) {


    return (
        <div>     
<div className="row">
  <div className="col-75">
    <div className="container1">
      <form >
      
        <div className="row">
          <div className="col-50">
            <h3 style={{color:"white"}}>Billing Address</h3><br/><br/>
            <label ></label>
            <input type="text" id="fname" name="firstname" placeholder="First Name"/><br/>
            <input type="text" id="email" name="email" placeholder="Email"/><br/>
            <input type="text" id="adr" name="address" placeholder="Address"/><br/>
            <input type="text" id="city" name="city" placeholder="City"/><br/>

            <div className="row">
              <div className="col-50">
                <input type="text" id="state" name="state" placeholder="State"/>
              </div>
              <div className="col-50">
                <input type="text" id="zip" name="zip" placeholder="Zip"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3 style={{color:"white"}}>Payment</h3>
            <label style={{color:"white"}}>Accepted Cards</label>
            <div className="icon-container1">
              <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange"}}></i><br/><br/>
            </div>
            <input type="text" id="cname" name="cardname" placeholder="Name on Card"/><br/>
            <input type="text" id="ccnum" name="cardnumber" placeholder="Credit card number"/><br/>
            <input type="text" id="expmonth" name="expmonth" placeholder="Exp Month"/><br/>
            <div className="row">
              <div className="col-50">
                <input type="text" id="expyear" name="expyear" placeholder="Exp Year"/>
              </div>
              <div className="col-50">
                <input type="text" id="cvv" name="cvv" placeholder="CVV"/>
              </div>
            </div>
          </div>
          
        </div>
       <Link to="/SucessfullyPageOrdered"> <input style={{background:"white",margin:"5%"}} value="Place Order" className="btn"/></Link>
      </form>
    </div>
  </div>
 
  </div>
</div>)}
export default withRouter(FormPayment)