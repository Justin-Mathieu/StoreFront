import { useSelector, useDispatch } from "react-redux";
import { When } from "react-if";
import { removeProduct } from "../../Store/cart";
import { List, ListItem, Button } from "@mui/material";
import { addInventory } from "../../Store/products";

function Cart(){
    const { cart} = useSelector((state)=> state)
    const dispatch = useDispatch();

    const handleRemove = (product)=>{
        dispatch(removeProduct(product));
        dispatch(addInventory(product))
    }
    return(
        <>
        <When condition={cart.length >= 0}>
            <div className='cart'>
                <List>
                    {
                    cart.map((product, index)=>(
                        <ListItem key={`cart-${index}`}>{product.name} <Button onClick={()=> handleRemove(product)}>Remove Item</Button></ListItem>
                    ))
                    }
                    
                </List>
            </div>
        </When>
   </>
    )
}
export default Cart;