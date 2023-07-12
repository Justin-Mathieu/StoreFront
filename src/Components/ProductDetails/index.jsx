import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom'

function ProductDetails(){
const {products} = useSelector((state)=> state)
const { id } = useParams()
const product = products.find((product=>product._id === id))
const related = products.filter(items => items._id !== id)
console.log(related)

    return(
        <>
        <h1>{product.name}</h1>
        <Card>
            <CardMedia sx={{height: 300}}
                        image={`https://source.unsplash.com/random?${product.name}`}
                        title={product.name}/>
            <CardContent>
                <Typography>
                    {`$${product.price}`} 
                </Typography>
                <Typography>
                    {`In Stock: ${product.inStock}`}
                </Typography>
              
            </CardContent>
        </Card>
        <Button>BUY NOW</Button>

        <h3>Related Items</h3>
                {
                     related.map(item=>(
<>
                    <Card>
                        <h3>{item.name}</h3>
                      <CardMedia sx={{height: 300, width:300 }}
                        image={`https://source.unsplash.com/random?${item.name}`}
                        title={item.name}/>
                    </Card>
                    </>
                     ))     
                    }
        </>
    )

}
export default ProductDetails;