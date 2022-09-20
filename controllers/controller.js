import UserModel from '../databases/mydb.js';
const defaultController = (req, res) => { res.send('<h1>Its Working</h1>') }

const getController =
    async (req, res) => {
        const user = await UserModel.find();
        res.status(200).send(user)
    }

const postController =
    (req, res) => {
        const users = { fullName: req.body.fullName, email: req.body.email, password: req.body.password }
        console.log(users)
        const data = new UserModel(users)
        data.save((err, users) => {
            if (err) {
                res.send(err);
                console.log(err);
            }
            else { res.json(users); }
        })
    }

const singleController =
    (req, res) => {
        const id = req.params.id;
        UserModel.find({ '_id': id }, (err, user) => {
            if (err) {
                res.send(err)
            }
            else { res.json(user) }
        })
    }

const putController = (req, res) => {
    const id = req.params.id;
    const data = { fullName: req.body.fullName, email: req.body.email, password: req.body.password }
     UserModel.findOneAndUpdate({ '_id': id }, { $set: data }, (err, user) => {
        if (err) {
            res.send(err)
        }
        else { res.json(user) }
    })
}

const deleteController = (req, res)=>{
    const id = req.params.id;
    UserModel.deleteOne({'_id':id}, (err, user) => {
        if (err) {
            res.send(err)
        }
        else { res.json(user) }
    })
}

export { defaultController, getController, postController, singleController, putController, deleteController }