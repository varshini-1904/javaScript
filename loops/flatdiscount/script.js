let produtprices=[1000,2000,3000,4000,5000]

i=0;
do{
    productlists.innerHTML+=`<div>${produtprices[i]-produtprices[i]*0.2}</div>`
    i++
}while(i<produtprices.length)
