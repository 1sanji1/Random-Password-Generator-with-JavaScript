const ipn=document.getElementById("input");
const res=document.getElementById("result");
const img=document.getElementById("imge");
const sub=document.getElementById("submit");
let r;

sub.onclick=function(){
    r=Math.floor(Math.random()*(7-1)+1);
    res.textContent=`Your input is : ${r}`;
    img.innerHTML=`<img src="dice images/${r}.png">`;
    console.log(r)
}



