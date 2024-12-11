// Generating Random Color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let setIntervalId;

const changeColor = function(){
    if(!setIntervalId){
        setIntervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopColor = function(){
    clearInterval(setIntervalId);
    setIntervalId = null;
}

document.querySelector('#start').addEventListener('click', changeColor);
document.querySelector('#stop').addEventListener('click', stopColor);
