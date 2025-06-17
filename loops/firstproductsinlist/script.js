let productlists=["mobile","tab","laptop","telvision","router"]
productHTML="<div>"
for(let i=0;i<3;i++){
    productHTML+=`<div>${productlists[i]}</div>`
}
productHTML+="</div>"
document.getElementById("products").innerHTML+=productHTML