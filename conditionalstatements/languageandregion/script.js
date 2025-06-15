language=prompt('Enter your language from (en, hi, fr, es)')
region=prompt('indian or other')
switch(language){
    case 'en':
        if(region== 'indian'){
            console.log('Hello Namaste')
        }
        else{
            console.log('Hi welcome')
        }
        break
    case 'hi':
        if(region== 'indian'){
            console.log('Namaste')
        }
        else{
            console.log('Hi welcome')
        }
        break
    case 'fr':
        if(region== 'indian'){
            console.log('"Bonjour')
        }
        else{
            console.log('Hi welcome')
        }
    break;
    case 'es':
        if(region== 'indian'){
            console.log('Hola')
        }
        else{
            console.log('Hi welcome')
        }
    break;
    
     
        
}