billamount=Number(prompt('enter the total bill amount'))
promocode=prompt('Enter your promo codee (FLAT50 or PERCENT10)')
if(promocode=='FLAT50'){
    console.log(billamount=billamount-50)
}
else if(promocode=='PERCENT10'){
    console.log(billamount=billamount-(billamount*0.1))
}
else{
    console.log('No discount')
}


