import UserModel from "../databases/mydb.js";

const defaultController = (req, res)=>{
    const name="Nujan"
    res.status(200).send({data:`It's Working Thanks ${name}`, response:true})
}

const loginController = (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "login sucess", user: user })
            } else {
                res.send({ message: "wrong credentials" })
            }
        } else {
            res.send("not registered");
        }
    })
}

export {defaultController, loginController }