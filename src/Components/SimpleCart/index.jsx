import { List, ListItem} from "@mui/material"
import { useSelector } from "react-redux";
function Cart(){
    const { products, quantity } = useSelector((state)=> state.cart)
    console.log('+++++++++++++++++>', products, quantity);
    return(
        <>
       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
products.map((product) =>(
     <ListItem>stuff here</ListItem>

        }
</List>

)
   </>
export default Cart;