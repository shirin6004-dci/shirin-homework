function smallletter(str) {
    if (str === str.toLowerCase()) {
        return true
    } else {
        return false
    }
}
document.write(smallletter('shirin') + '<br>')


document.write('************************<br>')

//------------------------------------------


document.write('************************<br>')




function f1(arr) {
    let result = []
    let counter = 0
    for (let j = 0; j < arr.length; j++) {
     
        for (let i = 1+j ; i < arr.length ; i++) {

            if (result.indexOf(arr[j] + '.' + arr[i]) == -1  ) {

                counter++
                result.push(arr[j] + '.' + arr[i])

            }
                
        }
  }
    document.write(result + '<br>' + counter)

}
f1([5, 1, 8, 1])


