const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');

const {User, Role} = require('./models/index');
// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');
// const UserRepository = require('./repository/user_repository');

const UserService = require('./services/user_service');
const app = express();


const prepareAndStartServer = async() => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async()=>{
        console.log('Server started on port: ', PORT);

        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }

        const u1 = await User.findByPk(4);
        const r1 = await Role.findByPk(3);
        // u1.addRole(r1);
                            // u1.getRoles();
                            // r1.getUsers();
        const response = await u1.hasRole(r1);
        console.log(response);



        // const service = new UserService();
        // const newToken = service.createToken({email:'jha00256@gmail.com', id:1});
        // console.log("new token is", newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpoYTAwMjU2QGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2OTU3Mjg2ODksImV4cCI6MTY5NTcyODcxOX0.7RzuG6lnH02G9MphAkdlcmEKU2apa542eaD2bOF8pm4';
        // // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpoYTAwMjU2QGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2OTU3MjgzNjgsImV4cCI6MTY5NTczMTk2OH0.vZIxbj9zuTfzkYLxthvKWtPqNliZNd41VfBwPnghPB8';
        // const response =  service.verifyToken(token);
        // console.log(response);

        // const repo = new UserRepository();
        // const response = await repo.getById(1);
        // console.log(response);

        // const incomingPassword = '12456';
        // const user = await User.findByPk(3);
        // const response = bcrypt.compareSync(incomingPassword, user.password);
        // console.log(response);
    });
}
prepareAndStartServer();
