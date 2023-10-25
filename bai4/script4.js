let btnAction4 = document.getElementById("btn-action-4");

btnAction4.addEventListener("click", () => {
 let date = parseInt(document.getElementById("day").value);

 if (date === 2){
    alert("Monday");

 }else if(date === 3){
    alert("Tuesday");

 }else if(date === 4){
    alert("Wednesday");

 }else if(date === 5){
    alert("Thursday");

 }else if(date === 6){
    alert("Friday");

 }else if(date === 7){
    alert("Saturday");

 }else if (date === 8){
    alert("Sunday");
 
 }


});