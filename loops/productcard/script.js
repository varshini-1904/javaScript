let carddetails=[
{ name: "Shirt", price: 500, category: "Clothing" },
{ name: "Watch", price: 1200, category: "Accessories" }
]

cardHTML="<div>"
for(let i=0;i<carddetails.length;i++){
     cardHTML += `<div>${carddetails[i].name}</div>`;
  cardHTML += `<div>${carddetails[i].price}</div>`;
  cardHTML += `<div>${carddetails[i].category}</div>`;
}

cardHTML+="</div>"

document.getElementById("details").innerHTML+=cardHTML
