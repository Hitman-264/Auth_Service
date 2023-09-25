const express = require('express');
const { PORT } = require('./config/serverConfig');
const app = express();

const prepareAndStartServer = async() => {
    app.listen(PORT, async()=>{
        console.log('Server started on port: ', PORT);
    })
}
prepareAndStartServer();
