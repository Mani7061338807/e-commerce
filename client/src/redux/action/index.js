// for add item to the cart
export const addCart = (product) =>{
    return{
        type : "ADDITEM",
        payload : product
    }   
}
// for delete item to the cart
export const delCart = (product) =>{
    return{
        type : "DELITEM",
        payload : product
    }   
}