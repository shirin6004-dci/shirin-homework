async function getData() {
    let response = await fetch('https://api.chucknorris.io/jokes/random')
    let data = await response.json()

    console.log(data)    //! SEE DATA 1
   
  console.log(data.icon_url)  
  let imgid = document.querySelector('#img')
  let img = document.createElement('img')
  imgid.append(img)
  img.setAttribute('src' , 'https://assets.chucknorris.host/img/avatar/chuck-norris.png')


 let id1 = document.querySelector('.id')
    id1.innerText = data.id
    
   let jock = document.querySelector('.jock')
    jock.innerText = data.value
}




let btn = document.querySelector('#somebtn')

btn.onclick = function () {
    getData()
}