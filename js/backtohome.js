const d2 = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day=days[d2.getDay()];
document.getElementById("date-is-on-day").innerHTML = day +' ,';

const d = new Date();
let year =d.getFullYear()
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[d.getMonth()]
let date =d.getDate()
let total = year+' '+month+' '+ date;


document.getElementById("date-is-on").innerHTML = total;
