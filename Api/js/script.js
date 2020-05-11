//*  this function ganna be called in the first page load and in the click event for the button > use Async await

async function getData() {
    let response = await fetch('https://api.chucknorris.io/jokes/random')
    if (response.status == 200) {
        let data = await response.json() // convert to obj
         console.log(data) //! SEE DATA
        

        //console.log(data.icon_url)  
        //get Img
        let imgid = document.querySelector('#img')
        imgid.setAttribute('src', 'https://assets.chucknorris.host/img/avatar/chuck-norris.png')

        // get Id
        let id1 = document.querySelector('.id')
        id1.innerText = data.id

        //get Value
        let jock = document.querySelector('.jock')
        jock.innerText = data.value

    }else{
        jock.innerText = 'error with getting data'
    }


}


let btn = document.querySelector('#somebtn')
// wenn click 
btn.onclick = function () {
    getData()
}