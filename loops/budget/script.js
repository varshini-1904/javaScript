let cartprices=[200,2000,3000]
budgetHTML="<div>"
let i=0
let sum=0
while(i<cartprices.length){
    sum=sum+cartprices[i]
    i++
}
if(sum<=5000){
    budgetHTML+=`<div>${"with in the budget"}</div>`
}
else{
    budgetHTML+=`<div>${"budget exceeded"}</div>`
}
budgetHTML+="</div>"
document.getElementById("cart").innerHTML+=budgetHTML