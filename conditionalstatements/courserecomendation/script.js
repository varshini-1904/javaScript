age=Number(prompt('Enter ypur age'))
if(age<18){
    console.log("Try Beginner Bootcamp")
}
else{
    areaofint=prompt('Enter your interest among the following (coding, design, marketing)')
    switch(areaofint){
        case 'coding':
            console.log("Full Stack Development Course")
            break;
        case 'design':
            console.log("UI UX Design Course")
            break;
        case 'marketing':
            console.log("Digital Marketing Course")
            break;
            default:
                 console.log("no course available")



    }

}