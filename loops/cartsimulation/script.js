
let items
cartHTML="<ul>"
for(i=0;i<5;i++){
    items=prompt('Enter the item:')
    cartHTML+=`<li>${items}</li>`
    
}

cartHTML+="</ul>"

document.getElementById("cart").innerHTML+=cartHTML
