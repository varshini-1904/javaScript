currencytype=prompt('select the type of currency "USD" or "EUR" or "INR"')
amount=Number(prompt('Enter your amount'))
switch (currencytype) {
    case 'USD':
        if(amount>=1000){
            console.log('Add bonus amount')
        }
        else{
            console.log('Use standard conversion')
        }
        break
    case 'EUR':
        if(amount>=1000){
            console.log('Add bonus amount')
        }
        else{
            console.log('Use standard conversion')
        }
        break
    case 'INR':
        if(amount>=1000){
            console.log('Add bonus amount')
        }
        else{
            console.log('Use standard conversion')
        }
        break
    default:
        console.log('error')
        

}