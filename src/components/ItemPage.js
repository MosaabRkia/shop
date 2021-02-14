import React,{useEffect, useState} from 'react'
import NavBar from './NavBar'
import '../cssFile/ItemPage.css'
import { withRouter } from 'react-router-dom';

 function ItemPage(props) {
    const [added,setAdded] = useState(false);
    const [addedWish,setAddedWish] = useState(false);


useEffect(()=>{
props.wishListArray.map(e=>{
    if(e.id === props.itemInUse.id){
        setAddedWish(true);
    }
})
},[])

    function AddToCart(){
        props.AddToCart(props.itemInUse.id);
        setAdded(true);
       }
       function AddToWishList(){
        setAddedWish(true);
        props.AddToWishList(props.itemInUse.id);
       }

    return (
        <div id="ItemPageDiv">
            <NavBar  Page="ItemPage"/>
        <img id="itemPhoto" src={props.itemInUse.imgsrc}/>
        <h1 id="itemTittle">{props.itemInUse.title}</h1>
        <h4 id="itemPrice">Price : {props.itemInUse.price}$</h4>
        {added?<button className="btn btn-danger" disabled>Added !</button>:<button className="btn btn-success"  onClick={AddToCart}>Add To Cart</button>}<br/><br/>
        {addedWish?<button className="btn btn-danger" disabled >Added to Wish List!</button>:<button className="btn btn-success"  onClick={AddToWishList}>Add To Wish List</button>}
        <h4 id="itemDescription">{props.itemInUse.descrption}</h4>
        </div>
    )
}
export default withRouter(ItemPage)