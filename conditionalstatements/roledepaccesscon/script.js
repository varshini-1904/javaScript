role=prompt('select the role "admin" or "manager" or "employee"')
department=prompt('Enter your department')
switch (role) {
    case 'admin':
        if(department=='hr'){
            console.log('Edit Access Granted')
        }
        else{
            console.log('View Only Access')
        }
        break
    case 'manager':
        if(department=='hr'){
            console.log('Edit Access Granted')
        }
        else{
            console.log('View Only Access')
        }
        break
    case 'employee':
       if(department=='hr'){
            console.log('Edit Access Granted')
        }
        else{
            console.log('View Only Access')
        }
        break
    default:
        console.log('error')
        

}