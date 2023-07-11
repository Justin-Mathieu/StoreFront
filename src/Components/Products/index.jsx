import { useDispatch, useSelector, } from 'react-redux';
import { When } from 'react-if';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { addCart } from '../Cart/cart';

function Products(){
    const { products } = useSelector((state)=>state.products)
    const { activeCategory } = useSelector((state)=> state.categories)
    const dispatch = useDispatch();
    return(
        <>
        <When condition={activeCategory}>
            <h2>{activeCategory.displayName}</h2>
            <p>!===CATEGORY DESCRIPTION===!</p>

            <Grid container spacing={1}>
            {
                products.map((product, index)=>(
                    <Grid key={`product${index}`} margin={1}>
                    <Card>
                        <CardMedia 
                        sx={{height: 140}}
                        image={`https://source.unsplash.com/random?${product.name}`}
                        title={product.name}
                        />
                        <CardContent>
                            <Typography>
                                {product.name}
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=>dispatch(addCart(product))}>ADD TO CART</Button>
                            <Button>VIEW DETAILS</Button>
                        </CardActions>
                    </Card> 
                    </Grid>
                ))
            
            }
            </Grid>
        </When>
        </>
    )
}

export default Products;
