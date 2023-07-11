import {useDispatch, useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { getCategories, setActiveCategory} from '../../Store/categories';


function Categories(){

const dispatch = useDispatch();
const { categories } = useSelector((state)=> state.categories)

  useEffect(()=>{
    dispatch(getCategories());
  }, []);

const handleSet = (category)=>{
  dispatch(setActiveCategory(category))
}
    return (
    <>
      <h2>
        Browse Categories
    </h2>
    {
      categories.map((category, index)=>(
     <Button key={`category${index}`} color='primary' onClick={()=> handleSet(category)}>{category.name}</Button>   
      ))
    }
    
    </>    
    )
}

export default Categories;