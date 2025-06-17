let cartlist=prompt([])
let cartHTML = "<div>";

do {
    cartHTML += "Cart is Empty";
} while (cartlist.length > 1);

cartHTML += "</div>";

document.getElementById('cartstatus').innerHTML += cartHTML;
