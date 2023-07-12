import { useDispatch, useSelector, } from 'react-redux';
import { When } from 'react-if';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { addProduct } from '../../Store/cart';
import { removeInventory } from '../../Store/products';
import { useEffect } from 'react';
import { getProducts} from '../../Store/products';
import {Link} from 'react-router-dom';

function Products(){
    const { products } = useSelector((state)=>state)
    const { activeCategory } = useSelector((state)=> state.categories)
    const dispatch = useDispatch();

const handleAdd = (product) => {
    console.log(product)
    dispatch(addProduct(product));
    dispatch(removeInventory(product))
}

useEffect(()=>{
    dispatch(getProducts(activeCategory.name))
}, [activeCategory])

    return(
        <>
        <When condition={activeCategory}>
            <h2>{activeCategory.name}</h2>
            <p>{activeCategory.description}</p>

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
                            <Button onClick={()=>handleAdd(product)}>ADD TO CART</Button>
                            <Button component={Link} to={`/product/${product._id}`}>VIEW DETAILS</Button>
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
