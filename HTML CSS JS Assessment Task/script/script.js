$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];


function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions
for (i=0; i <5; i++){
    $(".table > tbody:last-child").append('<tr><td>'+cup_cakes[i].name+'</td><td>'+cup_cakes[i].calories+'</td><td>'+cup_cakes[i].weight+'</td></tr>');   
}
show_color();
}

function show_color(){
    $("tr:eq(1) td:eq(1)").css("background","red");
    $("tr:eq(2) td:eq(1)").css("background","orange");
    $("tr:eq(3) td:eq(1)").css("background","red");
    $("tr:eq(4) td:eq(1)").css("background","green");
    $("tr:eq(5) td:eq(1)").css("background","orange");
}


let username=document.querySelector("#Cname");
let usercount=document.querySelector("#count");
let usertype =document.querySelector("#Type");
let deliveryTime= document.querySelector("#Dtime");
let Allergies=document.querySelector("#Allergies");
let customerform =document.querySelector(".form");

customerform.addEventListener("submit", function validate(e){
    e.preventDefault();
    //write code that validates the form
    if(username.value.length < 5 || username.value===""){
        $("#msg1").text("The name must between 5 and 16 characters long");
        $("#msg1").css("color","red");
        $("#Cname").css("border","2px solid red");
        localStorage.setItem("Username",JSON.stringify(username.value));
    }
    else{
        $("#msg1").text("Okay");
        $("#msg1").css("color","green");
        $("#Cname").css("border","2px solid green");
        localStorage.setItem("Username",JSON.stringify(username.value));
    }
    if( usercount.value < 1 || usercount.value> 15 ){
        $("#msg2").text("The count must be between 1 and 15");
        $("#msg2").css("color","red");
        $("#count").css("border","2px solid red");
    }
    else{
        $("#msg2").text("Okay");
        $("#msg2").css("color","green");
        $("#count").css("border","2px solid green");
    }
    if(usertype.value === "None"){
        $("#msg3").text("Please fill out the cupcake type");
        $("#msg3").css("color","red");
        $("#Type").css("border","2px solid red");
    }
    else{
        $("#msg3").text("Okay");
        $("#msg3").css("color","green");
        $("#Type").css("border","2px solid green");
    }    

    if(deliveryTime.value === "None"){
        $("#msg4").text("Please fill out the delivery time");
        $("#msg4").css("color","red");
        $("#Dtime").css("border","2px solid red");
    }
    else{
        $("#msg4").text("Okay");
        $("#msg4").css("color","green");
        $("#Dtime").css("border","2px solid green");
    }
    if(deliveryTime.value == "4:00" && usertype.value == "Chocolate"){
        $("#msg4").text("Unfortunately chocolate cupcakes cannot be delivered at 4 PM");
        $("#msg4").css("color","red");
        $("#Dtime").css("border","2px solid red");
    }
    if(Allergies.value == "None" || Allergies.value == "Dairy Free" || Allergies.value == "Nut Free"){
        $("#msg5").text("Okay");
        $("#msg5").css("color","green");
        $("#Allergies").css("border","2px solid green");
    }

    if(Allergies.value == "Dairy Free" && usertype.value == "Chocolate"){
        $("#msg5").text("chocolate cupcakes have dairy");
        $("#msg5").css("color","red");
        $("#Allergies").css("border","2px solid red");
    }

    if(Allergies.value == "Nut Free" && usertype.value == "Pecan"){
        $("#msg5").text("Pecan cupcakes have nuts");
        $("#msg5").css("color","red");
        $("#Allergies").css("border","2px solid red");
    }

})

let welcome_msg;
function show_storage(){
    //write code that shows the name from local storage
    welcome_msg = JSON.parse(localStorage.getItem("Username"));
    $("#welcome").text("Welcome"+" "+welcome_msg);
}