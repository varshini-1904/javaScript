let list=[
{ name: "Keyboard", stock: 3 },
{ name: "Mouse", stock: 0 },
{ name: "Charger", stock: 2 }
]

for(let i=0;i<list.length;i++){
    if(list[i].stock>0){
        productinstock.innerHTML+=`<p>${list[i].name},${list[i].stock}</p>`
    }
}



