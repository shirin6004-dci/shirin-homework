
let seconds = 0 
let min = 0 
let hours = 0


let bla = setInterval(() => {

    document.querySelector('#sp1').innerText =  name(hours,min,seconds)                
    
     seconds++
    if (seconds == 60){  //!
        

        min ++ 
        if (min == 60){  //!
 
            hours++
            if(hours == 60){
                clearInterval(bla)
            }
            
            min = 0
        }
       

        seconds =0
         
    }

},10 )


function name(hrs,mins,scs) {
    let result =''
    if (hrs < 10) {    // chon az 10 mishe 2 raghami dg niaz be 0 nist
        result =result+ '0' + hrs.toString()
    }else{
        result= result  + hrs.toString()   //! 
    }

    if (mins < 10) {
        result =result+ ':0' + mins.toString()
    }else{
        result=result + ':'+ mins.toString()
    }

    if (scs < 10) {
        result =result+ ':0' + scs.toString()
    }else{
        result= result + ':' +scs.toString()
    }
    return result
}