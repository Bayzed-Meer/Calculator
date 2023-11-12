const Display = document.getElementById("display");
const AC = document.getElementById("ac");
const DE = document.getElementById("de");
const Percent = document.getElementById("percent");
const Divide = document.getElementById("divide");
const Seven = document.getElementById("seven");
const Eight = document.getElementById("eight");
const Nine = document.getElementById("nine");
const Multiple = document.getElementById("multiple");
const Four = document.getElementById("four");
const Five = document.getElementById("five");
const Six = document.getElementById("six");
const Substraction = document.getElementById("substraction");
const One = document.getElementById("one");
const Two = document.getElementById("two");
const Three = document.getElementById("three");
const Plus = document.getElementById("plus");
const Zerozero = document.getElementById("zerozero");
const Zero = document.getElementById("zero");
const Dot = document.getElementById("dot");
const Equal = document.getElementById("equal");


AC.addEventListener("click", ()=>{
    Display.innerText = "";
});
DE.addEventListener("click", ()=>{
    let data = Display.innerText;
    data = data.slice(0,-1);
    Display.innerText = data;
});
Percent.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'%';
});
Divide.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'/';
});
Seven.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'7';
});
Eight.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'8';
});
Nine.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'9';
});
Multiple.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'*';
});
Four.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'4';
});
Five.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'5';
});
Six.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'6';
});
Substraction.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'-';
});
One.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'1';
});
Two.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'2';
});
Three.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'3';
});
Plus.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'+';
});
Zerozero.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'00';
});
Zero.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'0';
});
Dot.addEventListener("click", ()=>{
    Display.innerText = Display.innerText+'.';
});
Equal.addEventListener("click", ()=>{
    let data = Display.innerText;
    let sum;
    if(data.includes('+')){
        data=data.split('+'); 
        sum = Number(data[0]) + Number(data[1]);
    }
    else if(data.includes('-')){
        data=data.split('-');
        sum = Number(data[0]) - Number(data[1]);
    }
    else if(data.includes('*')){
        data=data.split('*');
        sum = Number(data[0]) * Number(data[1]);
    }
    else if(data.includes('/')){
        data=data.split('/');
        sum = Number(data[0]) / Number(data[1]);
    }
    else if(data.includes('%')){
        data=data.split('%');
        sum = Number(data[0]) % Number(data[1]);
    }
    Display.innerText = sum;
});