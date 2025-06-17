row=""
for(let i=0;i<5;i++){
    for(j=0;j<i;j++){
        row+=" ";
    }
    for(let j=i;j<5;j++){
        row+="*";
    
    }
    row+=`\n`
    
}
pattern.innerHTML+=`${row}`

