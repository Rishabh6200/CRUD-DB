import * as mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
})

export const UserModel = new mongoose.model('User',usersSchema)