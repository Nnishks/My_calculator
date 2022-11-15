
    let bag="";
   let keys = document.querySelectorAll("#key>div");
   
   for(let i=0;i<keys.length;i++){
       keys[i].addEventListener("click",myCalculator);}

function myCalculator(event){
 let targetNumber=event.target.innerText;
 if(targetNumber=="C"){
     document.querySelector("#display").innerText=""
    bag=""}
 else if(targetNumber=="="){
     if(bag!=""){
    document.querySelector("#display").innerText=eval(bag)
 }
}
 else {bag=bag+targetNumber;
//  console.log(bag);
 document.querySelector("#display").innerText=bag
}

}
