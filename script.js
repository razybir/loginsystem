function login(){
    console.log("Wrong password! Try again");
}

const password = "admin@1234";
const username = "admin@1234";

const inputpassword = prompt("Type the password to login");
const inputusername = prompt("Type the username to login");

if(inputpassword === password){
    console.log("correct password");
}
else{
     login()
}
if (inputusername === username){
    console.log("correct username");
}
else{
    console.log("Wrong username! Try again");
}

