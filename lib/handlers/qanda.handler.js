import dbConnect from "../db/dbConnect.js";
import qandaModel from "../db/models/qanda.model.mjs";

/* 

    QandAs Handler

*/

export const getQandas = async () => {

    let result = {status: 'error', message: `An Error Getting Q and A occured`, data: []};

    try {

        await dbConnect();

        await qandaModel.find({}).then((data) => {  

            result = {status: 'ok', message: "Questions and Answers fetched successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {

        console.log(error)

    }

};