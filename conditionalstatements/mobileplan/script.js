mobileplan=prompt('select the type "basic" or "standard" or "premium"')
user=prompt('Enter you are a "student" or not')
switch (mobileplan) {
    case 'basic':
        if(user=='student'){
            console.log("Extra student discount applied")
        }
        else{
            console.log('Standard pricing applied')
        }
        break
    case 'standard':
        if(user=='student'){
            console.log("Extra student discount applied")
        }
        else{
            console.log('Standard pricing applied')
        }
        break
    case 'premium':
        if(user=='student'){
            console.log("Extra student discount applied")
        }
        else{
            console.log('Standard pricing applied')
        }
        break
    default:
        console.log('error')
        

}