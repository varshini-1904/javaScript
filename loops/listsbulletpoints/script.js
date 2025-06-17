let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"]



let listHTML = "<ul>"

for (let i = 0; i < products.length; i++) {

  listHTML += "<li>" + products[i] + "</li>"

}

listHTML += "</ul>"
document.getElementById("product").innerHTML = listHTML


