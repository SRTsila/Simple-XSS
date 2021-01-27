const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dataBase = []
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});

app.post("/register", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
    if (dataBase.length === 0)
        response.send(`<body> ${request.body.userName} - ${request.body.userAge}<br>
                                Current comment - ${request.body.comment}</body>`);
    else
        response.send(`<body> ${request.body.userName} - ${request.body.userAge}<br>
                                Current comment - ${request.body.comment}<br>
                                Previous comments - ${getPreviousComments()}</body>`);
    dataBase.push({
        userName: request.body.userName,
        userAge: request.body.userAge,
        comment: request.body.comment
    })

});

function getPreviousComments(){
    let result = "<br>"
    for (let record of dataBase){
        result+=record.userName+' - ' + record.userAge + ' - ' + record.comment
        result +='<br>'
    }
    return result
}

app.get("/", function (request, response) {
    response.set({'Set-Cookie': 'login=yes'});
    response.send("Главная страница");
});

app.listen(3000);