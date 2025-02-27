const shoppinCart= {
    items: [
        { productName: "Apples", price: "5.67", quantity:40},
        { productName: "Bananas", price: "9.34", quantinty:100 }
    ],

    addItemToCart(item){
        this.items.push(item)

    }

    }
shoppinCart.addItemToCart({productName: "oranges", price: "3.45", quantinty: 34})
console.log(shoppinCart.items)

