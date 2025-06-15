theme=prompt("select the theme 'dark' light or 'auto")

if(theme=='dark'){
    console.log("Dark Theme Applied ")
    
}
else if(theme=='light'){
    console.log("Light Theme Applied")
    
}


else if(theme=='auto'){
    time=Number(prompt('Enter the time in 24hrs'))
     if(time<18){
        console.log("Apply Light Theme")
     }
     else{
        console.log("Apply Light Theme")

     }
}