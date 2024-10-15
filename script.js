function generatepassword(length,lowercase,uppercase,number,symbols){
    
    const lowchar="abcdefghijklmnopqrstuvwxyz";
    const upchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbchar="1234567890";
    const symchar="!@#$%^&*()_+";

    let allowedchar=``;
    let password=``;

    allowedchar += lowercase ? lowchar : "";
    allowedchar += uppercase ? upchar : "";
    allowedchar += number ? numbchar : "";
    allowedchar += symbols ? symchar : "";

    if(length==0){
        console.error("select a length more than 0");
    }else{
        for(let i=0;i<length;i++){
            password+=allowedchar[Math.floor(Math.random()*allowedchar.length)];
        }
    }

    return password;
}


const len=document.getElementById("len");
const val=document.getElementById("validate");
const lc=document.getElementById("lc");
const uc=document.getElementById("uc");
const nc=document.getElementById("nc");
const sc=document.getElementById("sc");
const output1=document.getElementById("output1");

let lowercase=false;
let uppercase=false;
let number=false;
let symbols=false;





val.onclick=function(){
    const length=Number(len.value);

    lowercase=lc.checked?true:false;
    uppercase=uc.checked?true:false;
    number=nc.checked?true:false;
    symbols=sc.checked?true:false;

    let password=generatepassword(length,lowercase,uppercase,number,symbols);
    output1.textContent=password;
    console.log(`password is : ${password}`);
}

    




