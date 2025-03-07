const timeArToString = (time:Array<string>)=>{
    let temp = [...time]
    for(let i=0;i<temp.length;i++){
        if(i==0 ){
            temp[i]=temp[i]+' hours'
        }else if(i==1){
            temp[i]=temp[i]+' minutes'
        }else if(i==2){
            temp[i]=temp[i]+' seconds'
        }
    }
    let hourEmp;let minEmp;
    if(temp[0].includes("00 hours")) hourEmp=true; 
    if(temp[1].includes("00 mintues")) minEmp=true; 
        if(hourEmp) temp = temp.slice(1,time.length)
            if(hourEmp && minEmp) temp = temp.slice(2,time.length)
    for(let i=0;i<temp.length;i++){
        if(i!==temp.length-1){
            temp[i]=temp[i]+' '
        }
    }


    return temp.join('')

}

export {timeArToString}