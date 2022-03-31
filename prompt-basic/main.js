let info = prompt("Lütfen adınızı girin: ")

let hello = document.querySelector("#header")

//hello.innerHTML = `${hello.innerHTML} <small style="color:pink">${info}</small>`

console.log(info)

document.write("<p id='hi'>Merhaba, " + `${info}` + '</p>')


