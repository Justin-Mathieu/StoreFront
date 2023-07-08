export const  set = (category) => {
   
    return {
        type: 'SET',
        payload: category,
    }
}

export const add = (product)=>{
    console.log(product);
    return{
        type: 'ADD',
        payload: product,
    }
}

export const remove = (product)=>{
    console.log(product);
    return{
        type: 'REMOVE',
        payload: product,
    }
}