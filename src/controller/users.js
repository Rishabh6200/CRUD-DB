import { UserModel } from "../schema/users.js"

export const getUsers = async (req, res) => {
    try {
        const user = await UserModel.find();
        if (user.length > 0) {
            return res.status(200).json(user)
        }
        return res.status(404).json({ message: "No User find" })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }

}

export const postUsers = async (req, res) => {
    try {
        const saveUser = await UserModel.insertOne(user);

        if (saveUser) {
            return res.status(200).json(saveUser);
        }

        return res.status(500).json({ message: "No User find" })

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}