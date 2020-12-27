const day=document.querySelector(".day");
const hour=document.querySelector(".hours");
const minute=document.querySelector(".minutes");
const second=document.querySelector(".second");


function timer(){
const holidate="28 march 2021";
const newholidate=new Date(holidate);

const currdate=new Date();
const seconds=(newholidate-currdate)/1000;

const remminutes=Math.floor(seconds/60)%60;
const remhours=Math.floor(seconds/3600)%24;
const remdays=Math.floor(seconds/3600/24);
const remseconds=Math.floor(seconds%60);

day.innerHTML=remdays;
hour.innerHTML=remhours;
minute.innerHTML=remminutes;
second.innerHTML=remseconds
}
timer();

setInterval(timer,1000);