import {useDispatch, useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { getCategories, setActive} from '../../Store/categories';
import { getProducts } from '../../Store/products';


function Categories(){

  useEffect(()=>{
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

const dispatch = useDispatch();
const { categories } = useSelector((state)=> state.categories)
console.log('==============>>>>>', categories);
    return (
    <>
      <h2>
        Browse Categories
    </h2>
    {
      categories.map((category, index)=>(
     <Button key={`category${index}`} color='primary' onClick={()=>{dispatch(setActive(category))}}>{category.name}</Button>   
      ))
    }
    
    </>    
    )
}

export default Categories;