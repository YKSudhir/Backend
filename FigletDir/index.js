const figlet = require("figlet");
figlet("Hello Sudhir!!" , function(err , data){
    if(err){
        console.log("Somethong went wrong...");
        console.dir(err);
        return ;
    }
    console.log(data);
});