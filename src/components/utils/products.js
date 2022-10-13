const products = [
    {id:1,name:'iphone 8', description:'64gb', stock:'2'},
    {id:2,name:'iphone x', description:'64gb', stock:'1'},
    {id:3,name:'iphone 14', description:'124gb', stock:'6'},
    {id:4,name:'iphone Xr', description:'32gb', stock:'5'}
]

export const getProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => { 
        return resolve(products);
    }) 
    }) 
    return promise
};

export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === parseInt(id))
        setTimeout(() => { 
        return resolve(result);
    },2000) 
    }) 
    return promise
};