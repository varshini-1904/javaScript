
language=prompt('select the language "en" or "hi" or "fr"')
time=prompt('Enter the time of the day morning or evening')
switch (language) {
    case 'en':
        if(time=='morning'){
            console.log('good morning')
        }
        else{
            console.log('good Evening')
        }
        break
    case 'hi':
        if(time=='morning'){
            console.log('shub uday')
        }
        else{
            console.log('shub shyam')
        }
        break
    case 'fr':
        if(time=='morning'){
            console.log('bonjour')
        }
        else{
            console.log('bonne soirée')
        }
        break
    default:
        console.log('error')
        

}