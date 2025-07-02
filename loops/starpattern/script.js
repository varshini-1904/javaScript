/*row=""
N=5
for(let i=0;i<N;i++){
    for(j=0;j<N-i;j++){
        row+=" ";
    }
    for(let j=N-i;j<N;j++){
        row+="*";

    }
    row+=`\n`

}
pattern.innerHTML+=`${row}`*/

/*for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        pattern.innerHTML+=`${j}`
    }
    pattern.innerHTML+=`<div></div>`
}*/

/*for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        if((i+j)%2==0){
             pattern.innerHTML+=`${"1"}`
        }
        else{
             pattern.innerHTML+=`${"0"}`

        }
         
    }
    pattern.innerHTML+=`<div></div>`
}
*/

/*row=""
for(let i=0;i<=5;i++){
    for(j=0;j<5;j++){
    
       if((i+j)%2==0){
        row+=`${" "}`
       }
       else{
        row+=`${i}`
       }
    }
    row+=`\n`

}
pattern.innerHTML+=`${row}`
*/

row=""
num=1
for(let i=1;i<4;i++){
    for(j=1;j<=5;j++){
       if(j<4-i || j>=3+i && (i+j)%2!=0){
        row+=`${" "}`
       }
       else{
        for((i+j)=4;(i+j)<=8;i+=2){
            row+=`${num}`
       } 
       
      }

  }
  row+=`\n`
}
pattern.innerHTML+=`${row}`