let categories = [
{ name: "Mobiles", items: ["iPhone", "OnePlus", "Samsung"] },
{ name: "Laptops", items: ["HP", "Dell", "Asus"] }
]
productHTML="<div>"
for(let i=0;i<categories.length;i++){
    devices.innerHTML+=`<div>${categories[i].name}`
    for(let j=0;j<categories[i].items.length;j++){
        devices.innerHTML+=`<ul><li>${categories[i].items[j]}</li></ul></div>`

    }

}
