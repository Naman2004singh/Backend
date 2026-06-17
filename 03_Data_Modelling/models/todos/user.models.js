import mongoose from "mongoose"

// schema is the method that take the obj 
const userSchema = new mongoose.Schema(
    {   
    // way 1
        // username : String,
        // emamil : String,
        // isActive : Boolean

        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
        },
        email : {
            type : true,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : [true, "Password is required"],

        }
    },{     
        timestamps : true
        // this will automatically add two fields i.e createdAt, updatedAt
    }
)
// need to export it to create the schema

// model method take two params - what model need to be made, and on what basis
export const User = mongoose.model("User", userSchema)
// when this connect with Db then it make the structure in the db
// when it get connected in db "User" => "users" (changes in db)