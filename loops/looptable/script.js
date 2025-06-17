let prices = [1000, 2000, 3000, 1500];

let tableHTML="<table border='1'>"
tableHTML+=`<tr>
           <th>${"OriginalPrice"}</th>
           <th>${"DiscountPrice"}</th>
           </tr>`
for(let i=0;i<prices.length;i++){
    tableHTML+=`<tr>
    <td>${prices[i]}</td><td>${prices[i]}-(${prices[i]*0.1})</td></tr>`
}



tableHTML+="</table>"
document.getElementById("prices").innerHTML+=tableHTML;
