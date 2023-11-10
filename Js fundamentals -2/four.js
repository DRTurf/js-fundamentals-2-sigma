const products=[
    {
        name:"Laptop",
        price:"120000"
    },
    {
        name:"Mobile",
        price:"70000"
    },
    {
        name:"Laptop Bag",
        price:"20000"
    },
    {
        name:"Watch",
        price:"20000"
    },
    {
        name:"Mobile Charger",
        price:"1500"
    },
]

const maxMin=()=>{
    let max=0;
    let min=999999;
    for (let product of products) {
        max = Math.max(max,product.price);
        min = Math.min(min,product.price);
    }
    for(let product of products) {
        if(product.price==max){
            console.log(`The product with maximum amount is ${product.name} which is priced at ${max}`);
        }
        else if(product.price==min){
            console.log(`The product with minimum amount is ${product.name} which is priced at ${min}`);
        }
}
}
maxMin();