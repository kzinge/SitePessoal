document.getElementById('email').addEventListener('click', copiarEmail);

function copiarEmail(){
    let email = 'georgeksmedeiros@gmail.com'
    navigator.clipboard.writeText(email).then(() => {
        alert('E-mail copiado')
    })

}