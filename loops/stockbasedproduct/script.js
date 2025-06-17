let productlist=[
{ name: "Keyboard", stock: 3 },
{ name: "Mouse", stock: 8 },
{ name: "Charger", stock: 0 }
]
productHTML="<div>"
for(let i=0;productlist[i].stock>0;i++){
    productHTML+=`<div>${productlist[i].name}</div>`
}
productHTML+="</div>"
document.getElementById("products").innerHTML+=productHTML