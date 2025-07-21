let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let c1=document.getElementById("p");
let c2=document.getElementById("q");
let c3=document.getElementById("r");

function red(){
    b1.style.backgroundColor="red";
    b2.style.backgroundColor="blue-violet";
    b3.style.backgroundColor="blue-violet";
    c1.style.backgroundColor="red";
    c2.style.backgroundColor="gray";
    c3.style.backgroundColor="gray";
}

function yellow(){
    b1.style.backgroundColor="blue-violet";
    b2.style.backgroundColor="yellow";
    b3.style.backgroundColor="blue-violet";
    c1.style.backgroundColor="gray";
    c2.style.backgroundColor="yellow";
    c3.style.backgroundColor="gray";
}

function green(){
    b1.style.backgroundColor="blue-violet";
    b2.style.backgroundColor="blue-violet";
    b3.style.backgroundColor="green";
    c1.style.backgroundColor="gray";
    c2.style.backgroundColor="gray";
    c3.style.backgroundColor="green";
}