let sor = (arr , n=arr.length) =>{

    if (n == 0 ){
        return arr
    }

 for (let i = 0; i < n-1; i++) {
     
     if (arr[i] > arr[i+1] ) {
         
       [ arr[i], arr[i + 1]] = [arr[i+1] , arr[i]]
     }
 }  
 return sor (arr , n - 1 ) 


}
document.write(sor([52,1,12,5]))