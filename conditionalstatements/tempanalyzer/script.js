temp=Number(prompt('enter the temperature'))
time=prompt('enter the time')
if(temp>35){
    if(time=='afternoon'){
        console.log('Extreme Heat Warning')
    }
    else{
        console.log('Hot weather')
    }
}
else if(temp>25){
    console.log('Normal Weather')

}
else{
    console.log("cold")
}