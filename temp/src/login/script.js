function Login(){
var nome = $("#nome").val()
var senha =$("#senha").val()

if (nome & senha && Nome  === "12345"){
    const user = {
        name: nome,
        DatadaEntada:new Date(),
        id:Math.floor(Math.random() * 100000)

    }
    localStorage.setItem("usuario", JSON.stringify(user))
    window.location.href = "../Loja"
}else{
document.getElementById("error-modal").style.display = "flex"
document.getElementById("nome").style.borderbottom = "3px solid red"
document.getElementById("senha").style.borderbottom = "3px solid red"

}
}

function showPassword(){
    var inputsenha = document.querySelector('#senha')
    var img_eye = document.querySelector('#eye')

    if(inputsenha.getAttribute("type") === "password"){
        inputsenha.setAttribute("type","text")
        img_eye.setAttribute("src","../../public/hide.png")
    }else{
         inputsenha.setAttribute("type", "password")
         img_eye.setAttribute("src","../../public/view.png")   
    }
}
function fecharError(){
    document.getElementById("error-modal").style.display = "none"
document.getElementById("nome").style.borderbottom = "2px solid #09090990"
document.getElementById("senha").style.borderbottom = "2px solid #09090990"
    
}
