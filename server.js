const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
import errorMiddleware from './server/middleware/errorMiddleware';

const app = express();
const port = process.env.PORT || 3000;
const httpServer = http.Server(app);
const srcFolder = 'src-prod';
const clientId = 'addc25a93f8c463f30631b3ce256f517';

app.set('view engine', 'ejs');
app.set('views', srcFolder);

app.use(express.static(srcFolder));
app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.render("index", {
        clientId
    });
});

httpServer.listen(port, () => {
    console.info(`server is running on ${port}`);
});
