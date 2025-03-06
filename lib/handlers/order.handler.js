import dbConnect from "../db/dbConnect.js";
import orderModel from "../db/models/order.model.mjs";

export const addOrder = async (body) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};

    try {

        await dbConnect();
    
        let data = await orderModel.create(body);
        result = {status: 'ok', message: "Order created successfully", data: data}

    } catch (error) {   

        console.log(error)

    }

    return result

}