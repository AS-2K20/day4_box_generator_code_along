let button = document.getElementById("theBoxes");
button.addEventListener("click",myFunction);
var oldValue=0;
var i=1;

function myFunction(){
    let n = document.getElementById("number").value;
    let c =document.getElementById("color").value;
    n=parseInt(oldValue)+parseInt(n);
    console.log(n);

    for(;i<=n;i++){
        var box=document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById("box").appendChild(box);
        box.innerHTML=i; 
        box.style.backgroundColor=c;
        oldValue = document.getElementById('box').lastElementChild.innerHTML;
    }

    
   
    console.log(n);
}   