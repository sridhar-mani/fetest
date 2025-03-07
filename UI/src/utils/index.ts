const timeArToString = (time)=>{

    for(let i=0;i<time.length;i++){
        if(i==0 ){
            time[i]=time[i]+' hours'
        }else if(i==1){
            time[i]=time[i]+' minutes'
        }else if(i==2){
            time[i]=time[i]+' seconds'
        }
    }
    if(time[0].includes("00")) time.splice(0,1)
    if(time[1].includes("00")) time.splice(1,1)

    for(let i=0;i<time.length;i++){
        if(i!==time.length-1){
            time[i]=time[i]+' '
        }
    }

    console.log(time.join(''))

    return time.join('')

}

export {timeArToString}