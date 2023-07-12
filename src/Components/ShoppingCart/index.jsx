import { List, ListItem, TextField, Button} from "@mui/material";
import { useSelector } from "react-redux";


function ShoppingCart(){
    const { cart } = useSelector(state=>state);

    return(
        <>
        <h2>Order Summary</h2>
        <List>
            {
                cart.map(item=>{
                    let total = 0;
                    item.price += total;
                    <ListItem>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                            <p>{item.price}</p>
                            <p>{total}</p>
                    </ListItem>
                })
            }
        </List>
        <form>
            
        <div>
            <h2>Billing Address</h2>
            <TextField  VAriant='standard' placeholder='full name'/>
            <TextField variant='standard' placeholder="Address"/>
            <TextField variant='standard' placeholder="City"/>
            <TextField variant='standard' placeholder="State"/>
        </div>

        <div>
        <h2>Billing Address</h2>
            <TextField  VAriant='standard' placeholder='Card Number'/>
            <TextField variant='standard' placeholder="CCV"/>
            </div>    
            <Button>Place Order</Button>
        </form>
        
        </>
    )
}
export default ShoppingCart;
