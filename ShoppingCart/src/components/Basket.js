import React from 'react';

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice=cartItems.reduce((a,c)=>a+c.price * c.qty,0);
    const taxPrice=itemsPrice*0.05;
    const totalPrice=itemsPrice+taxPrice;
    return (
        <aside className="block col-1">
            <h2>
                Cart Items
            </h2>
            <div>
                {cartItems.length === 0 && <div> cart is empty</div>} 
            </div>
            {cartItems.map((item) => (
                <div key={item.id } className="row">
            <div className="col-2">{item.name}</div>
                <div className="col-2">
                <button onClick={()=>onAdd(item)} className="add">+</button>
                <button onClick={()=>onRemove(item)} className="remove">-</button>
             </div>
             <div className="col-2 text-right">
                    {item.qty} x{item.price}
              </div>
             </div>
            
            ))}
             {cartItems.length!==0 &&(
                <>
                <hr></hr>
                <div className="row">
                    <div className="col-2"> items price</div>
                    <di className="col-1 text right">{itemsPrice}</di>
                </div>
                <div className="row">
                    <div className="col-2"> Tax</div>
                    <di className="col-1 text right">{taxPrice}</di>
                </div>
                <div className="row">
                    <div className="col-2"> <strong>Total Price</strong></div>
                    <div className="col-1 text right"><strong><h3>{totalPrice}</h3></strong></div>
                </div>
                </>
            )} 
        </aside>
    );
}