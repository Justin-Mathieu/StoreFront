import {useDispatch, useSelector} from 'react-redux';
import { set } from '../../Store/actions';
import Button from '@mui/material/Button';


function Categories(){

const dispatch = useDispatch();
const { categories } = useSelector((state)=> state.categories)
console.log(categories);
    return (
    <>
      <h2>
        Browse Categories
    </h2>
    {
      categories.map((category, index)=>(
     <Button key={`category${index}`} color='primary' onClick={()=>{dispatch(set(category))}}>{category.displayName}</Button>   
      ))
    }
    
    </>    
    )
}

export default Categories;