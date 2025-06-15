loggedin=prompt('had you logged in "yes" or "no"')
device=prompt('from "mobile" or "desktop"')
if(loggedin=="yes"){
    if(device=="mobile"){
        console.log('Mobile Dashboard')
    }
    else{
        console.log("Desktop Dashboard")
    }
}
else{
    console.log('please login')
}