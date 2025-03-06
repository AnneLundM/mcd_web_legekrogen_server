/* 

    QandAs Handler

*/

import dbConnect from "../db/dbConnect.js";
import productModel from "../db/models/product.model.mjs";
import { deleteProductImage } from "./file.handler.js";

export const getProducts = async () => {

    let result = {status: 'error', message: `An Error Getting Products occured`, data: []};

    try {

        await dbConnect();

        await productModel.find({}).then((data) => {  

            result = {status: 'ok', message: "Products fetched successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {

        console.log(error)

    }

};


export const addProduct = async (body) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};

    try {

        await dbConnect();

        body.image = body.image === undefined  ? `${process.env.SERVER_HOST}/products/no-product.jpg` : body.image;
   
        let data = await productModel.create(body);
        result = {status: 'ok', message: "Product created successfully", data: data}

    } catch (error) {   

        console.log(error)

    }

    return result

}



export const updateProduct = async (body) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};

    try {

        await dbConnect();
        await deleteProductImage(body.id)
   
        let data = await productModel.findByIdAndUpdate({_id: body.id}, body, {new: true});
        result = {status: 'ok', message: "Product updated successfully", data: data}

    } catch (error) {   

        console.log(error)

    }

    return result

}

export const deleteProduct = async (id) => {

    let result = {status: 'error', message: `An Error Deleting product ${id} occurred`, data: []};

    try {

        await dbConnect();
        await deleteProductImage(id)


        await productModel.findByIdAndDelete({_id: id}).then((data) => {  

            result = {status: 'ok', message: "Product deleted successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {

        console.log(error)

    }

};