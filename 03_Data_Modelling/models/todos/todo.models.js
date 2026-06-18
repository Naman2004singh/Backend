import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
    content : {
        type : String,
        required  :true
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        // it is related with the user schema
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "SubTodo"
        }
    ]   // array of objects (multiple objects) - subTodos
}, {timestamps : true})

export const Todo = mongoose.model("Todo", todoSchema)