cartvalue=Number(prompt("Enter your cart balue"))
if(cartvalue>1000){
    user=prompt("Enter are you a 'prime' member or 'Not prime'")
    if(user=='prime'){
        console.log("Free Delivery and 20 percent Discount")
    }
    else{
        console.log("Free Delivery and 10 percent Discount")
    }
}
else if(cartvalue>500){
    user=prompt("Enter are you a 'prime' member or 'Not prime'")
    if(user=='prime'){
        console.log("Free Delivery and 10 percent Discount")
    }
    else{
        console.log("Delivery Charge is 50 rupees")
    }
}
else{
    console.log("No Offers Available")
}