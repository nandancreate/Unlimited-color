const randomcolor = function(){
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i<6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startchangingcolor = function () {
  intervalId=setInterval(changebgcolor,1000);

  function changebgcolor(){
    document.body.style.backgroundColor=randomcolor();
  }
};

const stopchangingcolor=function(){
 clearInterval(intervalId);
 intervalId=null;


}

document.getElementById("start").addEventListener("click",startchangingcolor);

document.getElementById("stop").addEventListener("click",stopchangingcolor);
  
