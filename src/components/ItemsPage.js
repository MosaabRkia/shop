import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import EachListItem from "./EachListItem";
import NavBar from "./NavBar";

function ItemsPage(props) {
  const [catalogList, setCatalogList] = useState([]);


  useEffect(() => {
    let temp = props.allItems.filter((item) => {
      return item.type === props.typeOfCatalog;
    });
    setCatalogList(temp);
  }, []);

  function setItemToMain(e,path) {
    props.SetItem(e,path);
  }

  function AddToCart(eId) {
    let ToAddInCart = catalogList.filter((e) => {
      return e.id === eId;
    });
    let NewList = props.allItems.filter((e) => {
      return e.id !== eId;
    });
  
    let temp = NewList.filter((item) => {
      return item.type === props.typeOfCatalog;
    });
    setCatalogList(temp);
  
    props.AddToCart(ToAddInCart,NewList);
  }
  function SortItLowToHigh(){
   catalogList.sort( (a, b)=> {
      return a.price - b.price;
    });
    setCatalogList(catalogList)
    console.log(catalogList)
  }

  function SortItHighToLow(){
    catalogList.sort( (a, b)=> {
       return a.price - b.price;
     });
     setCatalogList(catalogList)
     console.log(catalogList)
   }

  return (
    <div>
      <NavBar Page="ItemsPage" toLink="/MainPage" />
<button className="btn btn-primary" onClick={SortItLowToHigh}>Sort By Price Low To High</button>
<button className="btn btn-primary" onClick={SortItHighToLow}>Sort By Price High To Low</button>
      <ul key="list">
        {catalogList.map((e) => {
          return (
            <EachListItem
              setItemToMain={setItemToMain}
              AddToCart={AddToCart}
              Item={e}
              path={`/ItemsPage-${props.index}`}
              />
          );
        })}
      </ul>
    </div>
  );
}

export default withRouter(ItemsPage)