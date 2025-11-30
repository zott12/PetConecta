function enviarMensagem() {
    let msg = document.getElementById("mensagem").value;
    if (msg === "") return;

    let chat = document.getElementById("chat");
    chat.innerHTML += "<p><b>Você:</b> " + msg + "</p>";

    document.getElementById("mensagem").value = "";
}
