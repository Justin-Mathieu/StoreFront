import {useDispatch} from 'react-redux';
import { foodCategory, electronicsCategory } from '../../Store/category';
import Button from '@mui/material/Button';


function Categories(){

const dispatch = useDispatch();

    return (
    <>
      <h2>
        Browse Categories
    </h2>
    <Button color='primary' onClick={()=>{dispatch(electronicsCategory('electronics'))}}>Electronics</Button>
    <Button color='primary' onClick={()=>{dispatch(foodCategory('food'))}}>Food</Button>
    </>    
    )
}

export default Categories;