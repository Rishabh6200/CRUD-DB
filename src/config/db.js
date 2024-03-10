import * as mongoose from 'mongoose'

export const connectDatabase = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1/smapleDatabase');
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}