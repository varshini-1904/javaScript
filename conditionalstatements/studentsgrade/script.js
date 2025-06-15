marks=Number(prompt('enter your marks'))
age=Number(prompt('enter your age'))
if(marks>=90){
    console.log("grade A")
    if(age<18){
        console.log("you are eligible for scholarship")
    }
}
else if(marks>=70){

    console.log("grade B")
    if(age>21){
        console.log("Try next year")
    }
}
else{
    console.log("Fail")
}