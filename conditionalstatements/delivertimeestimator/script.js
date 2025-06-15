producttype=prompt('Enter product type (fragile, express, standard)')
citytype=prompt('Enter city type (metro or non-metro).')
switch(producttype){
    case 'fragile':
        if(citytype== 'metro'){
            console.log('2 days')
        }
        else{
            console.log('4 days')
        }
        break
    case 'express':
        if(citytype== 'metro'){
            console.log('1 days')
        }
        else{
            console.log('2 days')
        }
        break
    case 'standard':
        if(citytype == 'metro'){
            console.log('3 days')
        }
        else{
            console.log('5 days')
        }
    
}
