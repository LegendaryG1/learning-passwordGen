let boxOne= document.getElementById("pass-box1")
let boxTwo= document.getElementById("pass-box2")
let GenerateBtn= document.getElementById("Generate")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordLenght=15

 function password() {
    let randomPassword=" "
    for( let i=0; i<=passwordLenght ; i++){
        let randomindex= Math.floor(Math.random()*characters.length)
        randomPassword+= characters[randomindex]
        
 }
 return randomPassword;
}
 function Keygen(){
    boxOne.textContent=password()
    boxTwo.textContent=password()
 }
   
 GenerateBtn.addEventListener("click", function(){
    Keygen()
      })




// GenerateBtn.addEventListener("click", function(){
//     for( let i=0; i<=passwordLenght ; i++){
//     let randomindex=  Math.floor(Math.random()*characters.length)
//     console.log (characters[randomindex])
//     boxOne.textContent +=characters[randomindex]
//     boxTwo.textContent+=characters[randomindex]
    
// }
   


// characters[randomindex]    


// })
