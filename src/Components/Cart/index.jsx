import { useSelector, useDispatch } from "react-redux";
import { When } from "react-if";
import { removeCart } from "..";
import { List, ListItem, Button } from "@mui/material";

function Cart(){
    const { cart} = useSelector((state)=> state.cart)
    const dispatch = useDispatch();
    return(
        <>
        <When condition={cart.length >= 0}>
            <div className='cart'>
                <List>
                    {
                    cart.map((product, index)=>(
                        <ListItem key={`cart-${index}`}>{product.name} <Button onClick={()=>dispatch(removeCart(product))}>Remove Item</Button></ListItem>
                    ))
                    }
                    
                </List>
            </div>
        </When>
   </>
    )
}
export default Cart;