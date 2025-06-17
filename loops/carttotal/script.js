let cart = [499, 299, 1299, 999]
totalamountHTML="<div>"
let i=0;
sum=0;
while(i<cart.length){
    sum=sum+cart[i]
    i++
}
totalamountHTML+=`<div>${sum}</div>`
totalamountHTML+="</div>"

document.getElementById("cart").innerHTML+=totalamountHTML