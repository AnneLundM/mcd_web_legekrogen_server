import dbConnect from "../db/dbConnect.js";
import subscriberModel from "../db/models/subscriber.model.mjs";


/* 

    SUBSCRIBER

*/

export const getSubscriber = async (id) => {

    let result = {status: 'error', message: `An Error Getting subscriber ${id} occurred`, data: []};

    try {

        await dbConnect();

        await subscriberModel.findById({_id: id}).then((data) => {  

            result = {status: 'ok', message: "Subscriber fetched successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const addSubscriber = async (body) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};

    try {

        await dbConnect();
    
        let data = await subscriberModel.create(body);
        result = {status: 'ok', message: "Subscriber created successfully", data: data}

    } catch (error) {   

        console.log(error)

    }

    return result

}

export const deleteSubscriber = async (id) => {

    let result = {status: 'error', message: `An Error Deleting subscriber ${id} occurred`, data: []};

    try {

        await dbConnect();

        await subscriberModel.findByIdAndDelete({_id: id}).then((data) => {  

            result = {status: 'ok', message: "Subscriber deleted successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const updateSubscriber = async (body) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};

    try {

        await dbConnect();
    
        await subscriberModel.findByIdAndUpdate({_id: body.id}, body, {new: true}).then((data) => {   
            
            result = {status: 'ok', message: "Subscriber created successfully", data: data}

        }).catch((error) => {

           console.log(error)

        });

        

    } catch (error) {   

        console.log(error)

    }

    return result

}


/* 

    SUBSCRIBERS

*/

export const getSubscribers = async (id) => {

    let result = {status: 'error', message: `An Error Getting subscriber ${id} occurred`, data: []};

    try {

        await dbConnect();

        await subscriberModel.find({}).then((data) => {  

            result = {status: 'ok', message: "Subscribers fetched successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {

        console.log(error)

    }

};