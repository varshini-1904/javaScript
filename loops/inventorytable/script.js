let products=[
{ name: "Keyboard", price: 500 , quantity: 2},
{ name: "Mouse", price: 300 , quantity: 1 },
{ name: "Charger", price: 150 , quantity: 5 }
]
tableHTML="<table border='1'>"
tableHTML+=`<tr><th>${"name"}</th><th>${"price"}</th><th>${"quantity"}</th><th>${"stockvalue"}</th></tr>`
for(i=0;i<products.length;i++){
    tableHTML+=`<tr>
               <td>${products[i].name}</td>
               <td>${products[i].price}</td>
               <td>${products[i].quantity}</td>
               <td>${products[i].price*products[i].quantity}</td>
               </tr>`
    
}
tableHTML+="</table>"
document.getElementById("table").innerHTML+=tableHTML