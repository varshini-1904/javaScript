cartvalue=Number(prompt('enter your cart value'))
prime=prompt('are you a prime user "yes" or "No"')
coupon=prompt('is "applied" or "Not"')
if(cartvalue>=500){
    if(prime=="yes"){
        console.log("20 percent discount")
    }
    else{
        if(coupon=="applied"){
            console.log("10 percent discount")
        }
        else{
            console.log("5 percent discount")
        }

        }
    }
else{
    console.log("No discount")
}


