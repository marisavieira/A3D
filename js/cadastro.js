function mostrarSenha() {
    var tipo = document.getElementById("senha");
    var img = document.getElementById("imagemSenha");
    if(tipo.type == "password"){
        tipo.type = "text";
        img.innerHTML='<i class="fas fa-eye-slash"></i>';
    }else{
        tipo.type = "password";
        img.innerHTML='<i class="fas fa-eye"></i>';
    }
}