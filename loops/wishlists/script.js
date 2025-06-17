let wishlists=["airdops","smartwatch","cupset","table"]
let productHTML="<div>"
let i=0
do{
    productHTML+=`<div>${wishlists[i]}</div>`
    i++
}
while(i<wishlists.length)
productHTML+="</div>"
document.getElementById("items").innerHTML+=productHTML


