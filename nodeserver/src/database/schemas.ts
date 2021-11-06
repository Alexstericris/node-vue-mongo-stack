import mongoose from "mongoose";

const {Schema} = mongoose;

const usersSchema = new Schema({
    email: String,
    primaryAddressId: "id",
    paymentAddressId: "id",


});

const addressesSchema = new Schema({
    firstName: String,
    lastName: String,
});