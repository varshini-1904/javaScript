let categories = [
{ type: "clothing", products: ["bedsheets", "saree"] },
{ type: "electronics", products: ["mobile", "laptop"] },
{ type: "Accessories", products: ["watch", "ring"] }
]
productHTML="<div>"
for(let i=0;i<categories.length;i++){
    productHTML+=`<div>${categories[i].type}`
    for(let j=0;j<categories[i].products.length;j++){
        productHTML+=`<ul><li>${categories[i].products[j]}</li></ul></div>`

    }

}
productHTML+="</div>"
document.getElementById("products").innerHTML+=productHTML