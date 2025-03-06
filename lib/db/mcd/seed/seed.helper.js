import userModel from "../../models/user.model.mjs";
import qandaModel from "../../models/qanda.model.mjs";
import reviewModel from "../../models/review.model.mjs";
import productModel from "../../models/product.model.mjs";
import subscriberModel from "../../models/subscriber.model.mjs";

import dbConnect from "../../dbConnect.js";

/*

    Create new User

*/
export const seedUser = async (user) => {
   
    console.log('-- User --')
    console.log(user);
    console.log('--\n')

    await dbConnect();

    try {

        user.picture = process.env.SERVER_HOST + user.picture;
        let newUser = await userModel.create(user);

        return newUser
    } catch (error) {
        console.log(error)
    }

}


/*

    Create new Question

*/
export const seedQuestion = async (qanda) => {

    console.log('-- Question --')
    console.log(qanda);
    console.log('--\n')

    await dbConnect();

    try {

        let result = await qandaModel.create(qanda);
        return result;


    } catch (error) {

        console.log(error)

    }


}

/*

    Create Reviews

*/
export const seedReview = async (review) => {

    console.log('-- Review --')
    console.log(review);
    console.log('--\n')

    await dbConnect();

    try {

        review.image = process.env.SERVER_HOST + review.image;

        let newReview = await reviewModel.create(review);
        return newReview;

    } catch (error) {

        console.log(error)

    }

}

/*

    Create Product

*/
export const seedProduct = async (product) => {

    console.log('-- Product --')
    console.log(product);
    console.log('--\n')

    await dbConnect();

    try {
     
        product.image = process.env.SERVER_HOST +  product.image;

        let newProduct = await productModel.create(product);
        return newProduct;

    } catch (error) {

        console.log(error)

    }

}

/*

    Create Subscriber

*/
export const seedSubscriber = async (subscriber) => {

    console.log('-- Subscriber --')
    console.log(subscriber);
    console.log('--\n')

    await dbConnect();

    try {

        let newSubscriber = await subscriberModel.create(subscriber);
        return newSubscriber;

    } catch (error) {

        console.log(error)

    }

}