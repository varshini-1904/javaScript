destination=prompt('enter wether the destination is "metrostation"')
passenger=prompt('whether you are a "senior" pasenger or "student" passenger')
if(destination=='metrostation'){
    if(passenger=='senior'){
        console.log('40 percent off')
    }
    else{
        console.log('full fare')
    }
}
else{
    if(passenger=='student'){
        console.log('50 percent off')
    }
    else{
        console.log('full fare')
    }
}