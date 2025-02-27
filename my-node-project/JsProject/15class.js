class ProductAlreadyExistsError extends Error {

    constructor(message){
        super(message)
        this.code = "Product Already Exists"
    }

}
class ProductNotFoundError extends Error{

    constructor (message) {
        super(message)
        this.code= "Product Not Found"
    }
}

try{

    throw new ProductNotFoundError ("Product not Found")
}catch (error){
    if (error instanceof ProductNotFoundError)
        {
        console.error ("Product not exists. \n"+ error.message , error.code)
    }
    else if (error instanceof ProductAlreadyExistsError)
        { console.error ("Prodauct aldeady exists. \n"+ error.message , error.code)
    }

}