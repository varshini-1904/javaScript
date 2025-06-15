weather=prompt('select the weather type "rainy" or "sunny" or "snow"')
temp=Number(prompt('Enter the temperature'))
switch (weather) {
    case 'rainy':
        if(temp<=10){
            console.log('stay inside')
        }
        else{
            console.log('wear protection')
        }
        break
    case 'sunnyy':
        if(temp<=20){
            console.log('stay inside')
        }
        else{
            console.log('wear protection')
        }
        break
    case 'snow':
        if(temp<=0){
            console.log('stay inside')
        }
        else{
            console.log('wear protection')
        }
        break
    default:
        console.log('error')
        

}