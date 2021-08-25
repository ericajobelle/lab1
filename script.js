var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10){
    dd='0'+dd
} 
if(mm<10){
    mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;

document.getElementById("eventDate1").setAttribute("min", today);
document.getElementById("eventDate2").setAttribute("min", today);
document.getElementById("posting").setAttribute("min", today);

function cancel(){
    alert("Are you sure you want to cancel?");
}

function save(){  
    alert("Event Created");
}