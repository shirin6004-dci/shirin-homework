//? Write a JavaScript function to test the first character of a string is uppercase or not
let str1 = "ALI"
function upper(str) {

   if(str.charAt(0) === str.charAt(0).toUpperCase()){
        document.write("ist upper" + 'br')
    }else {
        document.write("error" + '<br>')
    }

 
 
}
//upper(str1)


/* let x = 'some string';
alert(x.charAt(0));  */
document.write('************************<br>')







//? Write a JavaScript function to count number of words in string


function words(string) {
    let counter = 1
    for (let x = 0; x < string.length ; x++) {
        
        if (string[x] === " ") {
            counter++
        }
        
    }
    document.write('number of words : ' +counter + "<br>")
}
words("i am shirin and i")

document.write('************************<br>')




//? Write a JavaScript function to split a string and convert it into an array of words


function convert(str2) {

   document.write('convert it into an array : ' + str2.split('') + "<br>") 
    
}
//convert('shirin')

document.write('************************<br>')









//?  Write a JavaScript function to capitalize the first letter of a string.



/* function capitalize(letter) {
     
    document.write(letter.charAt(0).toUpperCase() + letter.slice(1) ) 
 
} */
//capitalize('capitalize the first letter : ' + 'shirin' + '<br>') 

document.write('************************<br>')












//? Write a JavaScript function to capitalize the first letter of each word in a string.


 function eachword(string1) {
     let result = []
  let x = string1.split(' ')
   // console.log(x)
    x.forEach(element => {

      let y  = element.charAt(0).toUpperCase()+element.slice(1 , element.length) 
     
       result.push(y)  
    });
        return result.join(' ')
}
 document.write(eachword('hi i am shirin'))  
 
//=================

